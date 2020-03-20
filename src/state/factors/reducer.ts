import { Action } from 'redux-actions';
import * as actions from "./actions";
import initialState from "./initialState";
import { FactorsT } from './types';


export default (state: FactorsT = initialState, action: Action<string, [], any>): FactorsT => {
  const { type } = action;
  switch (type) {
    case actions.FETCH_FACTORS:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
};
