import {createTheme} from '@shopify/restyle';

const palette = {
  gray: '#f2f2f2',
  black: '#0B0B0B',
  white: '#FFFFFF',
  red:'red'
};

const theme = createTheme({
  colors: {
    mainBackground: palette.gray,
    cardPrimaryBackground: palette.white,
    text: palette.black,
    danger:palette.red
  },
  spacing: {
    vs:2,
    p: 10,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 30,
      color: 'cardPrimaryBackground',
    },
    storeHeader: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 20,
      color: 'text',
    },
    paragraph: {
      fontFamily: 'Montserrat-Light',
      fontSize: 16,
      lineHeight: 24,
      color: 'cardPrimaryBackground',
    },
    text: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: 'cardPrimaryBackground',
    },
    textblack: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: 'text',
    },
    error: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: 'danger',
      marginTop:'vs'
    },
  },
});

export default theme;
