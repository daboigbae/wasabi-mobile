import { createSlice } from '@reduxjs/toolkit';

export const songPlayingSlice = createSlice({
	name: 'songPlaying',
	initialState: {
		songPlaying: {},
	},
	reducers: {
		setSongPlaying: (state, action) => {
			state.songPlaying = action.payload;
		},
	},
});

export const { setSongPlaying } = songPlayingSlice.actions;
export default songPlayingSlice.reducer;
