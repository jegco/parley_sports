import { takeLatest } from 'redux-saga/effects';

import getGames from './getGames';
import * as at from '../../actions/types';

export default function* root() {
  yield takeLatest(at.FETCH_GAMES, getGames);
}