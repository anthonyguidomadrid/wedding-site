import { StyledScrollLink } from './ScrollLink.styles';
import { ScrollLinkProps } from './ScrollLink.types';

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, onClick, children, className }) => {
  const handleLinkClick = () => {
    if (onClick) onClick();
  };
  return (
    <StyledScrollLink
      to={to}
      smooth={true}
      duration={1000}
      onClick={handleLinkClick}
      className={className}
    >
      {children}
    </StyledScrollLink>
  );
};
