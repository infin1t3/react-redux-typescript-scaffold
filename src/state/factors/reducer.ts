import * as actions from "./actions";
import initialState from "./initialState";
import { Action } from 'redux-actions';
import { IFactors } from './types';


export default (state: IFactors = initialState, action: Action<string, [], any>) => {
  const { type, payload } = action;
  switch (type) {
    case actions.FETCH_FACTORS:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};
