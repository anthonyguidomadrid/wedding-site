import { useTranslation } from 'react-i18next';

import { StyledScrollLink } from './ScrollLink.styles';
import { ScrollLinkProps } from './ScrollLink.types';

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, label, onClick }) => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    if (onClick) onClick();
  };
  return (
    <StyledScrollLink to={to} smooth={true} duration={1000} onClick={handleLinkClick}>
      {t(`menu.${label}`)}
    </StyledScrollLink>
  );
};
