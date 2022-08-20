import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {

      state.data = action.payload;
    },
    setStatus(state, action){
        state.status =action.payload
    }
  },
});

export const { setProducts, setStatus} = productSlice.actions
export default productSlice.reducer;


// Thunks 

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING))
    
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data))
    dispatch(setStatus(STATUSES.IDLE));

    } catch (error) {
        console.log(error);
        dispatch(setStatus(STATUSES.ERROR));

    }
  };
}

// export const fetchProducts = createAsyncThunk("products/fetch",async () => {
//   try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data))
//     dispatch(setStatus(STATUSES.IDLE));

//     } catch (error) {
//         console.log(error);
//         dispatch(setStatus(STATUSES.ERROR));

//     }
// })

