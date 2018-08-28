import * as at from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case at.FETCH_GAMES_SUCCESS: {
      return [ ...state, ...action.payload.games ];
    }

    default:
      return state;
  }
};
