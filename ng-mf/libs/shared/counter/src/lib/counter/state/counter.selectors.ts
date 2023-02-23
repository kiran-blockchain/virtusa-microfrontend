import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COUNTER_FEATURE_KEY,
  CounterState,
  counterAdapter,
} from './counter.reducer';

// Lookup the 'Counter' feature state managed by NgRx
export const selectCounterState =
  createFeatureSelector<CounterState>(COUNTER_FEATURE_KEY);

const { selectAll, selectEntities } = counterAdapter.getSelectors();

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state
);

export const selectCounterLoaded = createSelector(
  selectCounterState,
  (state: CounterState) => state.loaded
);

export const selectCounterError = createSelector(
  selectCounterState,
  (state: CounterState) => state.error
);

export const selectAllCounter = createSelector(
  selectCounterState,
  (state: CounterState) => selectAll(state)
);

export const selectCounterEntities = createSelector(
  selectCounterState,
  (state: CounterState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCounterState,
  (state: CounterState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCounterEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
