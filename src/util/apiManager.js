import axios from 'axios';
import appConfig from 'react-native-config';
const BASE_URL = appConfig.BASE_URL;

import ToastMessage from '../components/ToastMessage';

const request = async (options, isHeader = true) => {
  return new Promise((resolve, reject) => {

    const client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Authorization': `Bearer ${appConfig.TOKEN}`,
      },
    });

    const onSuccess = response => {
      resolve(response);
    };

    const onError = error => {
      console.log(error,"errorerror")
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        ToastMessage(
          'error',
          error.response.data.error,
          error.response.data.message,
        );
        reject(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js

        reject(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        reject(error.message);
      }
    };
    return client(options).then(onSuccess).catch(onError);
  });
};

export default request;
