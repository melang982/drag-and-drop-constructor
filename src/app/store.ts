import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculatorSlice';
import mainReducer from '../features/mainSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    main: mainReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
