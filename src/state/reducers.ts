import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import factors from './factors/reducer'
import { History } from 'history'

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  factors
});

export default rootReducer;
