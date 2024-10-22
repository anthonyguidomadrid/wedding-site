import crypto from 'crypto';

import { NextApiRequest, NextApiResponse } from 'next';

import { WeddingFormData } from '~/components/Rvsp/components/WeddingForm/WeddingForm.types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, attending, name, guest, phone, children, diet, playlist } =
    req.body as WeddingFormData;
  const isDev = process.env.CONTENTFUL_ENV === 'develop';

  if (!email || !name) {
    return res.status(400).json({ error: 'Missing required data' });
  }

  if (isDev) {
    return res.status(200).json({ success: true });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    if (!AUDIENCE_ID || !API_KEY || !DATACENTER) {
      return res.status(500).json({ error: 'Missing Mailchimp configuration' });
    }

    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;

    const data = {
      email_address: email,
      status_if_new: 'subscribed',
      status: 'subscribed',
      merge_fields: {
        EMAIL: email,
        FNAME: name.split(' ')[0],
        LNAME: name.split(' ')[1] ?? '',
        PHONE: phone,
        EVENTS: attending,
        EXTRAGUEST: guest,
        CHILDREN: Number(children),
        DIET: diet,
        PLAYLIST: playlist,
      },
    };

    let response;

    try {
      // Check if the contact exists
      response = await fetch(url, {
        headers: {
          Authorization: `apikey ${API_KEY}`,
        },
        method: 'GET',
      });

      if (response.status === 200) {
        // Contact exists, update it
        response = await fetch(url, {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'PUT',
        });

        if (response.status >= 400) {
          return res.status(400).json({ error: 'Error updating contact.' });
        }

        return res.status(200).json({ error: '' });
      } else {
        // Contact does not exist, create a new one
        response = await fetch(
          `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
          {
            body: JSON.stringify(data),
            headers: {
              Authorization: `apikey ${API_KEY}`,
              'Content-Type': 'application/json',
            },
            method: 'POST',
          },
        );

        if (response.status >= 400) {
          return res.status(400).json({ error: 'Error creating contact.' });
        }

        return res.status(201).json({ error: '' });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(500).json({ error: 'An unknown error occurred' });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An unknown error occurred' });
  }
};
