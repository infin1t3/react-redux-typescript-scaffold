import { all } from 'redux-saga/effects';
import factorsSaga from './factors/sagas';

export default function* () {
  yield all([
    factorsSaga(),
  ])
}
