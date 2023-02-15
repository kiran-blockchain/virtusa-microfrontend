import { createReducer, on, createAction } from '@ngrx/store';

export const productReducer = createReducer(
  { showProductCode: true },//initial State

  on(createAction('ToggleProductCode'), state => {
    
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);

