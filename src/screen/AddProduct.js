import React, {useState} from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
const Box = createBox();
const Text = createText();
import InputBox from '../components/InputBox';
import CategoryItem from '../components/CategoryItem';
import {productSchema} from '../util/formSchema';
import ApiManager from '../util/services';


import {Formik} from 'formik';

import {useMutation,useQueryClient} from 'react-query';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';



const AddProduct = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  // const [category, setCategory] = useState('');
  const categoriresData = useSelector(state => state?.categorires);
  const mutation = useMutation(ApiManager.addProduct, {
    onSuccess: (data) => {
      queryClient.setQueryData('products',(oldProducts)=>{
        return [data.data?.product,...oldProducts]
      });
      navigation.goBack();
    },
  });


  const handleFormSubmit = (values, {setSubmitting}) => {
    setSubmitting(true)
    mutation.mutate(values);
    setSubmitting(false)
  };


  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Box
        flex={1}
        justifyContent="center"
        backgroundColor="mainBackground"
        padding="l">
        <Formik
          validationSchema={productSchema}
          initialValues={{
            name: '',
            price: '',
            category: '',
            description: '',
            avatar: '',
            developerEmail: 'iamshimil@gmail.com',
          }}
          enableReinitialize={true}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
            errors,
            touched,
            handleBlur,
            setFieldValue,
          }) => {
            console.log(errors,"errors")
            return (
              <>
                <InputBox
                  onChangeText={handleChange('name')}
                  keyboardType="default"
                  value={values.name}
                  autoCapitalize={'characters'}
                  error={touched.name && errors.name}
                  placeholder={'Product title'}
                />

                <InputBox
                  onChangeText={handleChange('price')}
                  value={values.price}
                  autoCapitalize={'characters'}
                  error={touched.price && errors.price}
                  placeholder={'price'}
                  keyboardType={'numeric'}
                />

                <InputBox
                  onChangeText={handleChange('description')}
                  keyboardType="default"
                  value={values.description}
                  autoCapitalize={'characters'}
                  error={touched.description && errors.description}
                  placeholder={'description'}
                  textArea
                />

                <InputBox
                  onChangeText={handleChange('avatar')}
                  keyboardType="default"
                  value={values.avatar}
                  autoCapitalize={'characters'}
                  error={touched.avatar && errors.avatar}
                  placeholder={'Image Link'}
                />

                <Box height={80} justifyContent="center">
                  <Text variant="textblack" marginVetical={'xl'}>
                    Select category : {values?.category}
                  </Text>

                  {errors?.category && (
                    <Text variant="error" marginTop="s">
                      {errors?.category}
                    </Text>
                  )}
                </Box>
                <Box height={50} marginVetical={'xl'}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 7}}>
                    {categoriresData.data.map((item, index) => (
                      <CategoryItem
                        key={index}
                        selected={values?.category == item?.name}
                        item={item?.name}
                        onPress={() => setFieldValue('category', item?.name)}
                      />
                    ))}
                  </ScrollView>
                </Box>
                <Box alignItems="center" marginTop={'xl'}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Box
                      width={150}
                      height={50}
                      backgroundColor="text"
                      alignItems="center"
                      borderRadius={25}
                      paddingHorizontal={'s'}
                      justifyContent="center">
                      {isSubmitting ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        <Text variant="text">Add Product</Text>
                      )}
                    </Box>
                  </TouchableOpacity>
                </Box>
              </>
            );
          }}
        </Formik>
      </Box>
    </KeyboardAvoidingView>
  );
};
export default AddProduct;
