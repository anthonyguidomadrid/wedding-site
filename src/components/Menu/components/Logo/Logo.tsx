import { Button } from '@mui/material';

import { useScroll } from '~/hooks';

export const Logo = () => {
  const { scrollToTop } = useScroll();

  return (
    <Button
      style={{
        padding: '30px',
        backgroundColor: 'beige',
        borderRadius: '30px',
      }}
      onClick={() => scrollToTop()}
    />
  );
};
