import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { FooterGrid, FooterWrapper, LogoGrid } from './Footer.styles';
import { FooterProps } from './Footer.types';
import { MENU_ITEMS } from '../Menu/Menu.constant';
import { FadeInWrapper, ScrollLink } from '../shared';

import { getMailLink, getPhoneLink } from '~/helpers';
import { useMobile } from '~/hooks';

export const Footer: React.FC<FooterProps> = ({ email, phones }) => {
  const { t } = useTranslation();
  const { isMobile } = useMobile();
  return (
    <FadeInWrapper>
      <FooterWrapper>
        <Grid container alignItems="center">
          <Grid item xs={12} md={4} order={{ xs: 3, md: 1 }}>
            <FooterGrid>
              <FadeInWrapper>
                <Grid item>
                  <Typography variant="h3">{t('title.contact')}</Typography>
                </Grid>
                {phones.map(({ name, phoneNumber }) => (
                  <Grid item key={name}>
                    <Typography>
                      <span>{name}:</span> <a href={getPhoneLink(phoneNumber)}>{phoneNumber}</a>
                    </Typography>
                  </Grid>
                ))}
                <Grid item>
                  <Typography>
                    <a href={getMailLink(email)}>{email}</a>
                  </Typography>
                </Grid>
              </FadeInWrapper>
            </FooterGrid>
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <LogoGrid>
              <FadeInWrapper>
                <div
                  style={{
                    padding: '75px',
                    backgroundColor: 'beige',
                    borderRadius: '75px',
                  }}
                />
              </FadeInWrapper>
            </LogoGrid>
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 2, md: 3 }}>
            <FooterGrid>
              <FadeInWrapper>
                <Grid item>
                  <Typography variant="h3">{t('title.menu')}</Typography>
                </Grid>
                {MENU_ITEMS.map(({ item }) => (
                  <Grid item key={item}>
                    <ScrollLink to={item}>{t(`menu.${item}`)}</ScrollLink>
                  </Grid>
                ))}
              </FadeInWrapper>
            </FooterGrid>
          </Grid>
        </Grid>
      </FooterWrapper>
    </FadeInWrapper>
  );
};
