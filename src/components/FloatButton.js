import React, {memo} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTheme} from '@shopify/restyle';
import {useNavigation} from '@react-navigation/native';

const FloatButton = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={[
        style.container,
        {backgroundColor: theme.colors.white, borderColor: theme.colors.black},
      ]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddProduct')}
        style={style.donwContainer}>
        <Entypo name="plus" size={30} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  donwContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 25,
    bottom: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});

export default memo(FloatButton);
