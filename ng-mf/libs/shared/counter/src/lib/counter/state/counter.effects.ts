import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CounterActions from './counter.actions';
import * as CounterFeature from './counter.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class CounterEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.initCounter),
      switchMap(() => of(CounterActions.loadCounterSuccess({ counter: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(CounterActions.loadCounterFailure({ error }));
      })
    )
  );
}
