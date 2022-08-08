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
		<SafeAreaView className="w-full h-full" style={GlobalStyles.appView}>
			<ScrollView className="pt-8">
				<View className="px-16 items-center">
					<UserProfileAvatar avatar={photoURL} />
					<Text className="text-white text-2xl font-extrabold my-4">
						{displayName || "Default User"}
					</Text>
					<Button
						text="Edit profile"
						textStyle={styles.buttonText}
						onPress={() =>
							navigation.push(USER_PROFILE_SCREENS.EDIT_USER_PROFILE_SCREEN)
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
	buttonText: {
		color: COLOR_PALETTE.white,
		fontSize: 16 * PixelRatio.getFontScale(),
		fontWeight: "800"
	}
});
