import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import * as CounterFeature from './counter.reducer';
import * as CounterSelectors from './counter.selectors';

@Injectable()
export class CounterFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CounterSelectors.selectCounterLoaded));
  allCounter$ = this.store.pipe(select(CounterSelectors.selectAllCounter));
  selectedCounter$ = this.store.pipe(select(CounterSelectors.selectEntity));

  initialCount = this.store.pipe(select(CounterSelectors.selectCount));
  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  increment(){
    this.store.dispatch(CounterActions.incrementCount())
  }
  decrement(){
    this.store.dispatch(CounterActions.decrementCount())
  }
  init() {
    this.store.dispatch(CounterActions.initCounter());
  }
}
