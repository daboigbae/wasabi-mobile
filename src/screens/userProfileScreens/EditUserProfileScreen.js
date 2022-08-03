import {
	Dimensions,
	PixelRatio,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TextInput,
	View
} from "react-native";
import React, { useState } from "react";
import UserProfileAvatar from "../../components/profile/UserProfileAvatar";
import { useSelector } from "react-redux";
import GlobalStyles from "../../utils/GlobalStyles";
import { COLOR_PALETTE } from "../../utils/constants";

const width = Dimensions.get("window").width;

const EditUserProfileScreen = () => {
	const username = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.username
	);

	const [editUserName, setEditUsername] = useState(username || "Default User");

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.profileDetails}>
					<UserProfileAvatar />
					<TextInput
						onChange={setEditUsername}
						style={styles.editInput}
						value={editUserName}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default EditUserProfileScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingTop: "10%"
	},
	profileDetails: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: "center",
		alignItems: "center"
	},
	editInput: {
		color: COLOR_PALETTE.white,
		fontSize: 32 * PixelRatio.getFontScale(),
		fontWeight: "800",
		textAlign: "center",
		marginVertical: 16,
		width: width * 0.8,
		borderBottomWidth: 1,
		borderColor: COLOR_PALETTE.white
	},
	buttonText: {
		color: COLOR_PALETTE.white,
		fontSize: 16 * PixelRatio.getFontScale(),
		fontWeight: "800"
	}
});
