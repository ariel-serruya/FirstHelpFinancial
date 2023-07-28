/******************************************************************************
 * Created Date: Thursday July 27th 2023                                      *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 28th July 2023 12:22:06 am                          * 
 * Modified By: Ariel S.                                                      * 
 * -----                                                                      *
 * File: /src/redux/store.js                                                  *
 ******************************************************************************/

import { configureStore } from "@reduxjs/toolkit";
import creditcardReducer from "./features/creditcard/creditcardSlice";

export const store = configureStore({
  reducer: {
    creditcard: creditcardReducer,
  },
});
