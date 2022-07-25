import { createSlice } from "@reduxjs/toolkit";

export const MusicSlice = createSlice({
	name: "songPlaying",
	initialState: {
		playlists: {}
	},
	reducers: {
		setPlaylists: (state, action) => {
			state.playlists = action.payload;
		}
	}
});

export const { setPlaylists } = MusicSlice.actions;
export default MusicSlice.reducer;
