/******************************************************************************
 * Created Date: Friday July 28th 2023                                        *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 28th July 2023 1:04:56 am                           * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/redux/features/creditcard/creditcardSlice.js                    *
 ******************************************************************************/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  cardNumber: "",
  expirationDate: "",
  securityCode: "",
  country: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  phone: "",
};

export const creditcardSlice = createSlice({
  name: "creditcard",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    removeCard: (state) => {
      (state.name = ""),
        (state.cardNumber = ""),
        (state.expirationDate = ""),
        (state.securityCode = ""),
        (state.country = ""),
        (state.address1 = ""),
        (state.address2 = ""),
        (state.city = ""),
        (state.state = ""),
        (state.postalCode = ""),
        (state.phone = "");
    },
  },
});

export const { updateField, removeCard } = creditcardSlice.actions;

export default creditcardSlice.reducer;
