import {SET_SONG} from './actions';

const initialState = {
  song: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SONG:
      return {...state, song: action.payload};
    default:
      return state;
  }
}

export default userReducer;
