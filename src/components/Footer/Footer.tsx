import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { FooterProps } from './Footer.types';
import { MENU_ITEMS } from '../Menu/Menu.constant';
import { ScrollLink } from '../shared';

import { getMailLink, getPhoneLink } from '~/helpers';

export const Footer = ({ email, phones }: FooterProps) => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid item xs={4}>
        <Grid container flexDirection="column" spacing={3}>
          <Grid item>
            <Typography variant="h3">{t('title.contact')}</Typography>
            {phones.map(({ name, phoneNumber }) => (
              <Typography key={name}>
                <span>{name}:</span> <a href={getPhoneLink(phoneNumber)}>{phoneNumber}</a>
              </Typography>
            ))}
          </Grid>
          <Grid item>
            <Typography>
              <a href={getMailLink(email)}>{email}</a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container alignContent="center" justifyContent="center" style={{ height: '100%' }}>
          <div
            style={{
              padding: '75px',
              backgroundColor: 'beige',
              borderRadius: '75px',
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container flexDirection="column" spacing={3}>
          <Grid item>
            <Typography variant="h3">{t('title.menu')}</Typography>
          </Grid>
          {MENU_ITEMS.map(({ item }) => (
            <Grid item key={item}>
              <ScrollLink label={item} to={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
