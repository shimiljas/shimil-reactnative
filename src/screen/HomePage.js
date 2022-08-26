import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import {useSelector, useDispatch} from 'react-redux';
import {AnimatedFlatList} from 'flatlist-intro-animations';

import FloatButton from '../components/FloatButton';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

import {fetchCategories} from '../reducer/categoryReducer';

const Box = createBox();
const Text = createText();
const HomePage = () => {
  const [category, setCategory] = useState({name:'All'});

  const dispatch = useDispatch();
  const categoriresData = useSelector(state => state?.categorires);
  const categoriresDataStatus = useSelector(
    state => state?.categorires?.status,
  );
  useEffect(() => {
    if (categoriresDataStatus == 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoriresDataStatus, dispatch]);

  if (categoriresDataStatus == 'loading') {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#000000" />
      </Box>
    );
  }
  if (categoriresDataStatus == 'failed') {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="text">Something went wrong !!</Text>
      </Box>
    );
  }

  return (
    <>
      <Box flex={1} justifyContent="center" backgroundColor="mainBackground">
        <Header />
        <Box flex={1} padding={'p'}>
          <Box height={50}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 7}}>
               <CategoryItem
                  selected={category?.name == 'All'}
                  item={'All'}
                  onPress={() => setCategory({name:'All'})}
                />
              {categoriresData.data.map((item, index) => (
                <CategoryItem
                  key={index}
                  selected={category?.name == item?.name}
                  item={item?.name}
                  onPress={() => setCategory(item)}
                />
              ))}
            </ScrollView>
          </Box>

          <ProductList />
        </Box>
      </Box>
      <FloatButton />
    </>
  );
};

export default HomePage;
