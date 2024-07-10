import { Link as ScrollLink } from 'react-scroll';

export const CustomScrollLink = ({ to, children }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={1000}>
      {children}
    </ScrollLink>
  );
};
