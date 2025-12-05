import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from '@mui/material';
import Image from 'next/image';

export const CenteredTitle = styled(Typography)(() => ({
  textAlign: 'center',
}));

export const FaqWrapper = styled(Box)(({ theme }) => ({
  zIndex: 0,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.secondary,
  position: 'relative',
  padding: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10),
  },
}));

export const OliveBackground = styled(({ width = 140, height = 250, ...props }: any) => (
  <Image width={width} height={height} {...props} />
))(({ theme }) => ({
  position: 'absolute',
  opacity: 0.5,
  zIndex: -10,
  [theme.breakpoints.up('md')]: {
    width: 200,
    height: 320,
  },
}));

export const BottomLeftOliveBackground = styled(OliveBackground)(() => ({
  bottom: 10,
  left: 5,
}));

export const TopRightOliveBackground = styled(OliveBackground)(({ theme }) => ({
  transform: 'rotate(-90deg)',
  top: -50,
  right: 65,
  [theme.breakpoints.up('md')]: {
    top: -50,
    right: 80,
  },
}));

export const QuestionsWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.greenOverlay,
  padding: theme.spacing(3),
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  maxWidth: '1000px',
  backgroundColor: 'transparent',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  '&:before': {
    borderBottom: `0.5px solid ${theme.palette.background.paper}`,
  },
}));

export const ArrowIcon = styled(ArrowDropDownIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Summary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.secondary,
}));

export const Details = styled(AccordionDetails)(({ theme }) => ({
  fontSize: '1rem !important',
  a: {
    color: theme.palette.text.secondary,
    ':hover': {
      textDecoration: 'none',
    },
  },
}));
