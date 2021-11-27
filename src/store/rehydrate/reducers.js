import { setIn } from 'immutable';
import * as AT from './actionTypes';



const initialState = {
};


function rehydrateReducer(state = initialState, action = {},) {
  const { type, payload } = action;

  switch (type) {
    case AT.CLEAR: {
      return initialState;
    }

    case AT.SET_PERSIST_REHYDRATE: {
      return setIn(state, [payload], true);
    }

    default:
      return state;
  }
}

export default rehydrateReducer;
