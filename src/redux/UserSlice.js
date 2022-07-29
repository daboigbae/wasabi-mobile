import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		userInformation: null
	},
	reducers: {
		setUserInformation: (state, action) => {
			state.userInformation = action.payload;
		},
		clearUserInformation: (state) => {
			state.userInformation = null;
		}
	}
});

export const { setUserInformation, clearUserInformation } = UserSlice.actions;
export default UserSlice.reducer;
