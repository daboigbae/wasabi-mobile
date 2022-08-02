import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import GlobalStyles from "../../utils/GlobalStyles";
import { COLOR_PALETTE, NAVIGATORS } from "../../utils/constants";
import Button, { BUTTON_TYPES } from "../../components/common/Button";
import { handleSignOut } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { clearUserInformation } from "../../redux/UserSlice";

const UserProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const onPress = async () => {
		await handleSignOut(() => {
			dispatch(clearUserInformation());
			navigation.replace(NAVIGATORS.LANDING);
		});
	};
	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.artworkContainer}>
					<Button
						onPress={onPress}
						text="Sign Out"
						type={BUTTON_TYPES.PRIMARY}
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
	container: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		color: COLOR_PALETTE.white
	}
});
