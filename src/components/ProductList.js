import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {useQuery} from 'react-query';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

import ProductItem from './ProductItem';
import {products} from '../dummydata';
import ApiManager from '../util/services';

const Box = createBox();
const Text = createText();

const fetchProducts = async () => {
  const data = await ApiManager.getProducts();
  return data.data?.products;
};

const ProductList = ({category}) => {
  const [filter, createFilter] = useState([]);
  const {data, error, isError, isLoading} = useQuery('products', fetchProducts);

  useEffect(() => {
    if (category?._id) {
      let filtered = data.filter(item => item.category == category?.name);
      createFilter(filtered);
    } else {
      if (filter.length > 0) createFilter([]);
    }
  }, [category]);


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
  console.log(data,"data")

  return (
    <>
      {/* <Text variant="textblack">{data.length}</Text> */}
      <AnimatedFlatList
        data={filter.length > 0 ? filter : data}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={{alignItems: 'center'}}
        numColumns={2}
        animationType={AnimationType.SlideFromBottom}
        renderItem={({item}) => <ProductItem selected item={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginTop: 4,
    paddingHorizontal: 4,
  },
});
export default ProductList;
