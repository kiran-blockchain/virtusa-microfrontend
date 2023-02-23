import { CounterEntity } from './counter.models';
import {
  counterAdapter,
  CounterPartialState,
  initialCounterState,
} from './counter.reducer';
import * as CounterSelectors from './counter.selectors';

describe('Counter Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCounterId = (it: CounterEntity) => it.id;
  const createCounterEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CounterEntity);

  let state: CounterPartialState;

  beforeEach(() => {
    state = {
      counter: counterAdapter.setAll(
        [
          createCounterEntity('PRODUCT-AAA'),
          createCounterEntity('PRODUCT-BBB'),
          createCounterEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCounterState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Counter Selectors', () => {
    it('selectAllCounter() should return the list of Counter', () => {
      const results = CounterSelectors.selectAllCounter(state);
      const selId = getCounterId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CounterSelectors.selectEntity(state) as CounterEntity;
      const selId = getCounterId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCounterLoaded() should return the current "loaded" status', () => {
      const result = CounterSelectors.selectCounterLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCounterError() should return the current "error" state', () => {
      const result = CounterSelectors.selectCounterError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
