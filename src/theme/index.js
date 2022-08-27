import {createTheme} from '@shopify/restyle';
import {normalize} from './fontNormalize'
import {moderateScale} from  './scale'

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
    vs:moderateScale(2),
    p: moderateScale(10),
    s: moderateScale(8),
    m: moderateScale(16),
    l: moderateScale(24),
    xl: moderateScale(40),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontFamily: 'Montserrat-Bold',
      fontSize: normalize(30),
      color: 'cardPrimaryBackground',
    },
    storeHeader: {
      fontFamily: 'Montserrat-Bold',
      fontSize:  normalize(20),
      color: 'text',
    },
    paragraph: {
      fontFamily: 'Montserrat-Light',
      fontSize: normalize(16),
      lineHeight: 24,
      color: 'cardPrimaryBackground',
    },
    text: {
      fontFamily: 'Montserrat-Regular',
      fontSize: normalize(16),
      color: 'cardPrimaryBackground',
    },
    textblack: {
      fontFamily: 'Montserrat-Regular',
      fontSize: normalize(16),
      color: 'text',
    },
    error: {
      fontFamily: 'Montserrat-Regular',
      fontSize: normalize(16),
      color: 'danger',
      marginTop:'vs'
    },
  },
});

export default theme;
