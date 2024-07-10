import { MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';

export const LanguageSelector = () => {
  const { locale, locales } = useRouter();
  const router = useRouter();
  const languageNames = new Intl.DisplayNames([], {
    type: 'language',
  });
  return (
    <Select
      value={locale}
      onChange={event => {
        router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
          locale: String(event.target.value),
        });
      }}
    >
      {locales?.map(availableLocale => (
        <MenuItem key={availableLocale} value={availableLocale}>
          {languageNames.of(availableLocale)}
        </MenuItem>
      ))}
    </Select>
  );
};
