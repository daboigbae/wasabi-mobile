import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "songPlaying",
	initialState: {
		user: {}
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		}
	}
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
