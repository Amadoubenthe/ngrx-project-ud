import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

export const initialState: number = 10;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);
