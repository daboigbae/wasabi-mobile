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
import { COLOR_PALETTE, USER_PROFILE_SCREENS } from "../../utils/constants";

import UserProfileAvatar from "../../components/profile/UserProfileAvatar";
import { useSelector } from "react-redux";
import Button from "../../components/common/Button";

const UserProfileScreen = ({ navigation }) => {
	const displayName = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.displayName
	);

	const photoURL = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.photoURL
	);

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.profileDetails}>
					<UserProfileAvatar avatar={photoURL} />
					<Text style={styles.username}>{displayName || "Default User"}</Text>
					<Button
						text="Edit profile"
						textStyle={styles.buttonText}
						onPress={() =>
							navigation.navigate(USER_PROFILE_SCREENS.EDIT_USER_PROFILE_SCREEN)
						}
					/>
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
