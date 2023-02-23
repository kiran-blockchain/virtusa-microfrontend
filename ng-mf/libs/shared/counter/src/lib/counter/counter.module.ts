import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCounter from './state/counter.reducer';
import { CounterEffects } from './state/counter.effects';
import { CounterFacade } from './state/counter.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCounter.COUNTER_FEATURE_KEY,
      fromCounter.counterReducer
    ),
    EffectsModule.forFeature([CounterEffects]),
  ],
  providers: [CounterFacade],
})
export class CounterModule {}
