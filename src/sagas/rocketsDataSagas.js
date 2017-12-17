import { call, put, takeLatest } from 'redux-saga/effects';
import { receiveRocketsData } from './../actions/actionCreators';
import { REQUEST_ROCKETS_DATA } from './../actions/actionTypes';
import FetchData from './../utils/FetchData';

function* requestRocketsData(action) {
  try {
    const rocketsData = yield call(FetchData.bind(null, 'rockets'));
    yield put(receiveRocketsData(rocketsData));
  } catch (error) {
    console.log(error);
  }
}

const rocketsDataSagas = [
  takeLatest(REQUEST_ROCKETS_DATA, requestRocketsData),
];

export default rocketsDataSagas;
