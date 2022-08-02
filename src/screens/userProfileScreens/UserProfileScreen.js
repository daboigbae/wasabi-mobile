import React from "react";
import {
	PixelRatio,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native";
import PropTypes from "prop-types";
import GlobalStyles from "../../utils/GlobalStyles";
import { COLOR_PALETTE } from "../../utils/constants";

import UserProfileAvatar from "../../components/profile/UserProfileAvatar";
import { useSelector } from "react-redux";
import Button from "../../components/common/Button";

const UserProfileScreen = () => {
	const username = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.username
	);

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.profileDetails}>
					<UserProfileAvatar />
					<Text style={styles.username}>{username || "Default User"}</Text>
					<Button text="Edit profile" textStyle={styles.buttonText} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

UserProfileScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default UserProfileScreen;

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
