import gamesService from "../../../api/games";
import { call, put } from "redux-saga/effects";
import { fetchGamesSuccess } from "../../actions";

export default function* getGames() {
  try {
    const response = yield call(gamesService.getGames);
    yield put(fetchGamesSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
