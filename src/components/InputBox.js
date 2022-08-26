import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {createBox, createText, useTheme} from '@shopify/restyle';
const Text = createText();
const Box = createBox();
const InputBox = ({
  placeholder,
  onChangeText,
  keyboardType,
  autoCapitalize,
  value,
  returnKeyType,
  error,
  textArea,
}) => {
  return (
    <Box marginBottom="s">
      <TextInput
        placeholder={placeholder}
        style={[
          style.continer,
          textArea && {height: 90, textAlignVertical: 'top'},
        ]}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType ? returnKeyType : 'done'}
      />
      {error && (
        <Text variant={'error'} textAlign="left">
          {error}
        </Text>
      )}
    </Box>
  );
};
const style = StyleSheet.create({
  continer: {
    height: 60,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: 'black',
    borderRadius: 5,
    // marginBottom: 10,
    borderRadius: 10,
  },
});

export default InputBox;
