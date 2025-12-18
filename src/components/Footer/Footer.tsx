import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

import { FooterGrid, FooterWrapper, LogoGrid, FooterNote } from './Footer.styles';
import { FooterProps } from './Footer.types';

// Use public svg via <img> to avoid Turbopack/SVGR issues

import { MENU_ITEMS } from '../Menu/Menu.constant';
import { FadeInWrapper } from '../shared/FadeInWrapper';
import { ScrollLink } from '../shared/ScrollLink';

import { getMailLink, getPhoneLink } from '~/helpers';

export const Footer: React.FC<FooterProps> = ({ email, phones }) => {
  const { t } = useTranslation();
  return (
    <FadeInWrapper>
      <FooterWrapper>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Box sx={{ width: { xs: '100%', md: '33.3333%' }, order: { xs: 3, md: 1 } }}>
            <FooterGrid>
              <FadeInWrapper>
                <Box>
                  <Typography variant="h3">{t('title.contact')}</Typography>
                </Box>
                {phones?.map(({ name, phoneNumber }, index) => (
                  <Box key={index}>
                    <Typography>
                      <span>{name}:</span> <a href={getPhoneLink(phoneNumber)}>{phoneNumber}</a>
                    </Typography>
                  </Box>
                ))}
                <Box>
                  <Typography>
                    <Link href={getMailLink(email)}>{email}</Link>
                  </Typography>
                </Box>
              </FadeInWrapper>
            </FooterGrid>
          </Box>
          <LogoGrid sx={{ width: { xs: '100%', md: '33.3333%' }, order: { xs: 1, md: 2 } }}>
            <FadeInWrapper>
              <img src="/svg/logo-white.svg" alt="logo" width={170} height={120} />
            </FadeInWrapper>
          </LogoGrid>
          <Box sx={{ width: { xs: '100%', md: '33.3333%' }, order: { xs: 2, md: 3 } }}>
            <FooterGrid>
              <FadeInWrapper>
                <Box>
                  <Typography variant="h3">{t('title.menu')}</Typography>
                </Box>
                {MENU_ITEMS.map(({ item }) => (
                  <Box key={item}>
                    <ScrollLink to={item}>{t(`menu.${item}`)}</ScrollLink>
                  </Box>
                ))}
              </FadeInWrapper>
            </FooterGrid>
          </Box>
        </Box>
        <FooterNote>
          <Typography variant="body2">
            <Trans
              i18nKey="footer.developedBy"
              components={[
                <Link
                  href="https://www.anthonyguido.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  key="a"
                />,
              ]}
            />
          </Typography>
        </FooterNote>
      </FooterWrapper>
    </FadeInWrapper>
  );
};
