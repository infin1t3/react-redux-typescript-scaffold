import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history'
import factors from './factors/reducer'

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  factors
});

export default rootReducer;
