import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

import { LanguageButton } from './LanguageSelector.styles';
import { LanguageSelectorProps } from './LanguageSelector.types';

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { locales } = useRouter();
  const router = useRouter();

  const onLocaleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const selectedLocale = event.currentTarget.value;
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale: selectedLocale,
    });
  };

  return (
    <>
      {locales?.map(loc => (
        <LanguageButton key={loc} value={loc} onClick={onLocaleChange} className={className}>
          <Typography variant="title">{loc.toUpperCase()}</Typography>
        </LanguageButton>
      ))}
    </>
  );
};
