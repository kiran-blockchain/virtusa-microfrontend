import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import { CounterEntity } from './counter.models';

export const COUNTER_FEATURE_KEY = 'counter';

export interface CounterState extends EntityState<CounterEntity> {
  selectedId?: string | number; // which Counter record has been selected
  loaded: boolean; // has the Counter list been loaded
  error?: string | null; // last known error (if any),
  count: number
}

export interface CounterPartialState {
  readonly [COUNTER_FEATURE_KEY]: CounterState;
}

export const counterAdapter: EntityAdapter<CounterEntity> =
  createEntityAdapter<CounterEntity>();

export const initialCounterState: CounterState = counterAdapter.getInitialState(
  {
    // set initial required properties
    count: 1,
    loaded: false,
  }
);

const reducer = createReducer(
  initialCounterState,
  on(CounterActions.initCounter, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CounterActions.loadCounterSuccess, (state, { counter }) =>
    counterAdapter.setAll(counter, { ...state, loaded: true })
  ),
  on(CounterActions.loadCounterFailure, (state, { error }) => ({
    ...state,
    error,
  }),
  ),
  on(CounterActions.incrementCount, (state) => {
    let increment = state.count + 1;
    return { ...state, count: increment }
  },
  ),
  on(CounterActions.decrementCount, (state) => {
    let decrement = state.count -1 ;
    return { ...state, count: decrement }
  },
  ),

);

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
