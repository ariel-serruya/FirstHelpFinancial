/******************************************************************************
 * Created Date: Friday July 28th 2023                                        *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 28th July 2023 4:04:03 pm                           * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/redux/features/creditcard/creditcardSlice.js                    *
 ******************************************************************************/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.values = { ...action.payload };
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
