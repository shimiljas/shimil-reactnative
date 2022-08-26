import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../reducer/categoryReducer'
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    categorires: categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: __DEV__?true:false,
})