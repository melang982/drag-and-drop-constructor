import { createSlice } from '@reduxjs/toolkit';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';

export interface CalculatorState {
  displayedValue: string;
  firstValue: string;
  secondValue: string;
  operation: string;
}

const initialState: CalculatorState = {
  displayedValue: '0',
  firstValue: '0',
  secondValue: '0',
  operation: ''
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    reset: () => initialState,
    pressNumber: (state, action) => {
      if (state.operation) {
        if (parseInt(state.secondValue + action.payload) > Number.MAX_SAFE_INTEGER) return;
        state.secondValue = (state.secondValue + action.payload).replace(/^(?:0+(?=[1-9])|0+(?=0$))/gm, ''); //remove leading zeroes
        state.displayedValue = state.secondValue;
      } else {
        if (parseInt(state.firstValue + action.payload) > Number.MAX_SAFE_INTEGER) return;
        state.firstValue = (state.firstValue + action.payload).replace(/^(?:0+(?=[1-9])|0+(?=0$))/gm, '');
        state.displayedValue = state.firstValue;
      }
    },
    pressOperation: (state, action) => {
      state.firstValue = state.displayedValue;
      state.operation = action.payload;
    },
    pressEquals: (state) => {
      const val1 = parseFloat(state.firstValue.replace(',', '.'));
      const val2 = parseFloat(state.secondValue.replace(',', '.'));

      switch (state.operation) {
        case '+':
          state.displayedValue = (val1 + val2).toString();
          break;
        case '-':
          state.displayedValue = (val1 - val2).toString();
          break;
        case 'x':
          state.displayedValue = (val1 * val2).toPrecision(15).replace(/0+$/, '');
          break;
        case '/':
          if (val2 === 0) state.displayedValue = 'Не определено';
          else state.displayedValue = (val1 / val2).toPrecision(15).replace(/0+$/, '');
          break;
      }

      state.displayedValue = state.displayedValue.replace('.', ',');
      state.firstValue = '0';
      state.secondValue = '0';
      state.operation = '';
    }
  }
});

export const { reset, pressNumber, pressOperation, pressEquals } = calculatorSlice.actions;

export default calculatorSlice.reducer;
