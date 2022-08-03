import {
	PixelRatio,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native";
import React from "react";
import UserProfileAvatar from "../../components/profile/UserProfileAvatar";
import { useSelector } from "react-redux";
import GlobalStyles from "../../utils/GlobalStyles";
import { COLOR_PALETTE } from "../../utils/constants";

const EditUserProfileScreen = () => {
	const username = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.username
	);
	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.profileDetails}>
					<UserProfileAvatar />
					<Text style={styles.username}>{username || "Default User"}</Text>
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
	username: {
		color: COLOR_PALETTE.white,
		fontSize: 32 * PixelRatio.getFontScale(),
		fontWeight: "800",
		textAlign: "center",
		marginVertical: 16
	},
	buttonText: {
		color: COLOR_PALETTE.white,
		fontSize: 16 * PixelRatio.getFontScale(),
		fontWeight: "800"
	}
});
