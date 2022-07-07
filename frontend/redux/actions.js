export const SET_SONG = 'SET_SONG';

export const setSong = song => dispatch => {
  dispatch({
    type: SET_SONG,
    payload: song,
  });
};
