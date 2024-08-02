import { StyledScrollLink } from './ScrollLink.styles';
import { ScrollLinkProps } from './ScrollLink.types';

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, onClick, children }) => {
  const handleLinkClick = () => {
    if (onClick) onClick();
  };
  return (
    <StyledScrollLink to={to} smooth={true} duration={1000} onClick={handleLinkClick}>
      {children}
    </StyledScrollLink>
  );
};
