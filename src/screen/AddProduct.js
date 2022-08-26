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
        console.log(oldProducts,"oldProducts")
        return [data.data,...oldProducts]
      });
      navigation.goBack();
    },
  });


  const handleFormSubmit = (values, {setSubmitting}) => {
    // console.log(values, 'valuesvaluesvaluesvalues');
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
          // validationSchema={productSchema}
          initialValues={{
            Name: '',
            Price: '',
            Category: '',
            Description: '',
            Avatar: '',
            DeveloperEmail: 'iamshimil@gmail.com',
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
            return (
              <>
                <InputBox
                  onChangeText={handleChange('Name')}
                  keyboardType="default"
                  value={values.Name}
                  autoCapitalize={'characters'}
                  error={touched.Name && errors.Name}
                  placeholder={'Product title'}
                />

                <InputBox
                  onChangeText={handleChange('Price')}
                  value={values.Price}
                  autoCapitalize={'characters'}
                  error={touched.Price && errors.Price}
                  placeholder={'Price'}
                  keyboardType={'numeric'}
                />

                <InputBox
                  onChangeText={handleChange('Description')}
                  keyboardType="default"
                  value={values.Description}
                  autoCapitalize={'characters'}
                  error={touched.Description && errors.Description}
                  placeholder={'Description'}
                  textArea
                />

                <InputBox
                  onChangeText={handleChange('Avatar')}
                  keyboardType="default"
                  value={values.Avatar}
                  autoCapitalize={'characters'}
                  error={touched.Avatar && errors.Avatar}
                  placeholder={'Image Link'}
                />

                <Box height={80} justifyContent="center">
                  <Text variant="textblack" marginVetical={'xl'}>
                    Select category : {values?.Category}
                  </Text>

                  {errors?.Category && (
                    <Text variant="error" marginTop="s">
                      {errors?.Category}
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
                        selected={values?.Category == item}
                        item={item?.name}
                        onPress={() => setFieldValue('Category', item?.title)}
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
