import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

import { LanguageButton, LanguageSelectorWrapper } from './LanguageSelector.styles';

import { FadeInWrapper } from '~/components/molecules/FadeInWrapper';
import { useScroll } from '~/hooks';

export const LanguageSelector = () => {
  const { locales } = useRouter();
  const router = useRouter();
  const { isAtTop } = useScroll();

  const onLocaleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const selectedLocale = event.currentTarget.value;
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale: selectedLocale,
    });
  };

  return (
    <LanguageSelectorWrapper>
      {locales?.map(loc => (
        <LanguageButton key={loc} value={loc} onClick={onLocaleChange} isAtTop={isAtTop}>
          {loc.toUpperCase()}
        </LanguageButton>
      ))}
    </LanguageSelectorWrapper>
  );
};
