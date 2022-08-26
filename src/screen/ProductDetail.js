import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
const Box = createBox();
const Text = createText();

const windowWidth = Dimensions.get('window').width;

const ProductDetail = ({route}) => {
  const product=route?.params?.product
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
            uri: 'https://cloudinary-res.cloudinary.com/image/upload/w_300,c_fill/dpr_auto/iphonexdesign.jpg',
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
          justifyContent="space-between"
          padding={'l'}>
          <Text variant="header" numberOfLines={1}>{product?.title}</Text>
          <Text variant="header">$80</Text>
        </Box>
        <Box flex={8} alignItems="flex-start" padding={'l'}>
          <Text variant="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductDetail;
