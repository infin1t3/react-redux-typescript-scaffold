import {all, takeLatest} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga'
import * as actions from './actions';

export function* fetchFactors$(): SagaIterator {
  try {
    // @ts-ignore
    yield console.log("Try placeholder");
  } catch {
    // @ts-ignore
    console.log("Catch placeholder");
  }
}

export default function* (): SagaIterator {
  yield all([
    takeLatest(actions.fetchFactors, fetchFactors$)
  ])
}
