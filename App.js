/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';

import Navigator from './src/navigation';
import {store} from './src/store';
import theme from './src/theme';

const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <>
                <StatusBar barStyle={'light-content'} />
                <Navigator />
              </>
            </ThemeProvider>
          </Provider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
