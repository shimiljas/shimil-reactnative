import React from 'react';
import {Image, Dimensions, ActivityIndicator} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {useQuery} from 'react-query';

const Box = createBox();
const Text = createText();

const windowWidth = Dimensions.get('window').width;

import ApiManager from '../util/services';

const fetchProduct = async productId => {
  const data = await ApiManager.getProductDetail(productId);
  return data.data?.product;
};

const ProductDetail = ({route}) => {
  const productId = route?.params?.productId;
  console.log(productId, 'productId');

  const {data, error, isError, isLoading} = useQuery(
    ['product', productId],
    () => fetchProduct(productId),
  );
  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#000000" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="text">{`Something went wrong !! error: ${error}`}</Text>
      </Box>
    );
  }

  return (
    <Box flex={1} backgroundColor="cardPrimaryBackground">
      <Box
        flex={5}
        alignItems="center"
        justifyContent={'center'}
        padding="l"
        backgroundColor="cardPrimaryBackground">
        <Image
          source={{
            uri:
              data?.avatar ??
              'https://cloudinary-res.cloudinary.com/image/upload/w_300,c_fill/dpr_auto/iphonexdesign.jpg',
          }}
          style={{width: windowWidth, height: '100%'}}
          resizeMode={'cover'}
        />
      </Box>
      <Box
        flex={5}
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
        shadowOffset={{width: 2, height: 5}}
        shadowColor={'text'}
        overflow="hidden"
        elevation={3}
        shadowRadius={3}
        backgroundColor="text">
        <Box
          flex={2}
          alignItems={'center'}
          flexDirection="row"
          justifyContent="space-around"
          overflow="hidden"
          marginRight={'s'}
          padding={'l'}>
          <Box flex={6} marginRight='l'>
            <Text variant="header" numberOfLines={1}>
              {data?.name}
            </Text>
          </Box>
          <Box flex={4}>
            <Text variant="header">${data?.price}</Text>
          </Box>
        </Box>
        <Box flex={8} alignItems="flex-start" padding={'l'}>
          <Text variant="paragraph">{data?.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductDetail;
