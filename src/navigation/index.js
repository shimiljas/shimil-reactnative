import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomePage from '../screen/HomePage';
import AddProduct from '../screen/AddProduct';
import ProductDetail from '../screen/ProductDetail';

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}
