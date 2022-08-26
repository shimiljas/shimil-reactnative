import Toast from 'react-native-toast-message';

const ToastMessage = (type, title, message, position = 'bottom') => {
  Toast.show({
    type: type,
    position: position,
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};

export default ToastMessage;
