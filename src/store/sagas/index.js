import {fork, all} from 'redux-saga/effects'

import gamesSagas from './games';
// import betsSagas from './bets';

export default function* rootSaga() {
    yield all([
        fork(gamesSagas)
    ]);
}