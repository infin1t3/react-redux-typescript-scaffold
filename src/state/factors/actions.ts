import {createAction} from 'redux-actions';

export const FETCH_FACTORS = '[FACTORS] Fetch factors';
export const fetchFactors= createAction(FETCH_FACTORS);

export const FETCH_FACTORS_SUCCESS = `${FETCH_FACTORS} success`;
export const fetchFactorsSuccess = createAction(FETCH_FACTORS_SUCCESS);

export const FETCH_FACTORS_FAIL = `${FETCH_FACTORS} fail`;
export const fetchFactorsFail = createAction(FETCH_FACTORS_FAIL);
