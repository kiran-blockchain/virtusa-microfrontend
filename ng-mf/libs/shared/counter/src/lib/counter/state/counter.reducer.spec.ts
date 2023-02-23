import { Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import { CounterEntity } from './counter.models';
import {
  CounterState,
  initialCounterState,
  counterReducer,
} from './counter.reducer';

describe('Counter Reducer', () => {
  const createCounterEntity = (id: string, name = ''): CounterEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Counter actions', () => {
    it('loadCounterSuccess should return the list of known Counter', () => {
      const counter = [
        createCounterEntity('PRODUCT-AAA'),
        createCounterEntity('PRODUCT-zzz'),
      ];
      const action = CounterActions.loadCounterSuccess({ counter });

      const result: CounterState = counterReducer(initialCounterState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = counterReducer(initialCounterState, action);

      expect(result).toBe(initialCounterState);
    });
  });
});
