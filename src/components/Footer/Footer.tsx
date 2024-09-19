import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { FooterGrid, FooterWrapper, LogoGrid } from './Footer.styles';
import { FooterProps } from './Footer.types';

import LogoWhite from '/public/svg/logo-white.svg';

import { MENU_ITEMS } from '../Menu/Menu.constant';
import { FadeInWrapper, ScrollLink } from '../shared';

import { getMailLink, getPhoneLink } from '~/helpers';

import Link from 'next/link';

export const Footer: React.FC<FooterProps> = ({ email, phones }) => {
  const { t } = useTranslation();
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
                {phones?.map(({ name, phoneNumber }) => (
                  <Grid item key={name}>
                    <Typography>
                      <span>{name}:</span> <a href={getPhoneLink(phoneNumber)}>{phoneNumber}</a>
                    </Typography>
                  </Grid>
                ))}
                <Grid item>
                  <Typography>
                    <Link href={getMailLink(email)}>{email}</Link>
                  </Typography>
                </Grid>
              </FadeInWrapper>
            </FooterGrid>
          </Grid>
          <LogoGrid xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <FadeInWrapper>
              <LogoWhite width="170" height="120" />
            </FadeInWrapper>
          </LogoGrid>
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
