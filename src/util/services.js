import request from './apiManager';

const getCategories = () => {
    return request(
      {
        method: 'get',
        url: `/api/categories`,
      },
      true,
    );
};


const getProductDetail = (id) => {
  return request(
    {
      method: 'get',
      url: `/api/products/${id}`,
    },
    true,
  );
};


const getProducts = () => {
  return request(
    {
      method: 'get',
      url: `/api/products`,
    },
    true,
  );
};


const addProduct = (data) => {
  return request(
    {
      method: 'post',
      url: `/api/products`,
      data
    },
    true,
  );
};

export default {
    getCategories,
    getProducts,
    addProduct,
    getProductDetail
  }