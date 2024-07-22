import { useTranslation } from 'react-i18next';

import { StyledScrollLink } from './ScrollLink.styles';
import { ScrollLinkProps } from './ScrollLink.types';

export const CustomScrollLink = ({ to, label }: ScrollLinkProps) => {
  const { t } = useTranslation();
  return (
    <StyledScrollLink to={to} smooth={true} duration={1000}>
      {t(`menu.${label}`)}
    </StyledScrollLink>
  );
};
