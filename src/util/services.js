import request from './apiManager';

const getCategories = () => {
    return request(
      {
        method: 'get',
        url: `/albums`,
      },
      true,
    );
};


const getProducts = () => {
  return request(
    {
      method: 'get',
      url: `/posts`,
    },
    true,
  );
};


const addProduct = (data) => {
  return request(
    {
      method: 'post',
      url: `/posts`,
      data
    },
    true,
  );
};

export default {
    getCategories,
    getProducts,
    addProduct
  }