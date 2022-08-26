import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


import ApiManager from  '../util/services'

export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
  const response = await ApiManager.getCategories();
  console.log(response.data,"response")
  return response.data
})


const initialState = {
  data: [],
  status: 'idle',
  error: null
}

export const categorySlice = createSlice({
  name: 'categorires',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.data = state.data.concat(action.payload)
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default categorySlice.reducer