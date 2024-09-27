import { useState } from 'react';

export const useWeddingFormApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitWeddingForm = async formData => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch('/api/mailchimp', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(JSON.stringify(response) || 'Something went wrong');
      }

      setSuccess(true);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { submitWeddingForm, loading, error, success };
};
