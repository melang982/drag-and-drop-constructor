import { createSlice } from '@reduxjs/toolkit';

export interface MainState {
  isRuntime: boolean;
  availableComponents: Array<string>;
  selectedComponents: Array<string>;
}

const initialState: MainState = {
  isRuntime: false,
  availableComponents: ['display', 'operations', 'numbers', 'equals'],
  selectedComponents: []
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      state.isRuntime = false;
    }
  }
});

export const { addComponent } = mainSlice.actions;

export default mainSlice.reducer;
