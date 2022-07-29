import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		userInformation: null
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		}
	}
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
