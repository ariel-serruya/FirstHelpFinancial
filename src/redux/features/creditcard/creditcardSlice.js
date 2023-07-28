/******************************************************************************
 * Created Date: Friday July 28th 2023                                        *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 28th July 2023 12:50:19 am                          * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/redux/features/creditcard/creditcardSlice.js                    *
 ******************************************************************************/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  cardNumber: null,
  expirationDate: null,
  securityCode: null,
  country: null,
  address1: null,
  address2: null,
  city: null,
  state: null,
  postalCode: null,
  phone: 5555555,
};

export const creditcardSlice = createSlice({
  name: "creditcard",
  initialState,
  reducers: {
    setCard: (state, action) => {
      (state.name = action.payload.newName),
        (state.cardNumber = action.payload.newCardNumber),
        (state.expirationDate = action.payload.newExpirationDate),
        (state.securityCode = action.payload.newSecurityCode),
        (state.country = action.payload.newCountry),
        (state.address1 = action.payload.newAddress1),
        (state.address2 = action.payload.newAddress2),
        (state.city = action.payload.newCity),
        (state.state = action.payload.newState),
        (state.postalCode = action.payload.newPostalCode),
        (state.phone = action.payload.newPhone);
    },
    removeCard: (state) => {
      (state.name = null),
        (state.cardNumber = null),
        (state.expirationDate = null),
        (state.securityCode = null),
        (state.country = null),
        (state.address1 = null),
        (state.address2 = null),
        (state.city = null),
        (state.state = null),
        (state.postalCode = null),
        (state.phone = null);
    },
  },
});

export const { setCard, removeCard } = creditcardSlice.actions;

export default creditcardSlice.reducer;
