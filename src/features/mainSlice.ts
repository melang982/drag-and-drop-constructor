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
    setRuntime: (state, action) => {
      state.isRuntime = action.payload;
    },
    addComponent: (state, action) => {
      let { name, index } = action.payload;

      const oldIndex = state.selectedComponents.findIndex((x) => x === name);
      if (oldIndex > -1) {
        if (oldIndex === index) return;
        state.selectedComponents.splice(oldIndex, 1); //remove old component
        if (oldIndex < index) index--;
      }

      state.selectedComponents.splice(index, 0, name);
    },
    removeComponent: (state, action) => {
      state.selectedComponents = state.selectedComponents.filter((x) => x !== action.payload);
    }
  }
});

export const { setRuntime, addComponent, removeComponent } = mainSlice.actions;

export default mainSlice.reducer;
