import {
	Alert,
	Dimensions,
	PixelRatio,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TextInput,
	View
} from "react-native";
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import UserProfileAvatar from "../../components/profile/UserProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "../../utils/GlobalStyles";
import { COLOR_PALETTE } from "../../utils/constants";
import Button, { BUTTON_TYPES } from "../../components/common/Button";
import { launchImageLibrary } from "react-native-image-picker";
import {
	getUpdatedUserInformation,
	handleUpdateProfile
} from "../../utils/firebase";

const width = Dimensions.get("window").width;

const EditUserProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const displayName = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.displayName
	);

	const photoURL = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.photoURL
	);

	const [editUserName, setEditUsername] = useState(
		displayName || "Default User"
	);
	const [imagePreview, setImagePreview] = useState(photoURL || "");
	const [isLoading, setIsLoading] = useState(false);

	const informationNotUpdated = useMemo(() => {
		return displayName === editUserName && photoURL === imagePreview;
	});

	const handleSelectImage = async () => {
		const IMAGE_OPTIONS = {
			maxWidth: 500,
			maxHeight: 500
		};
		await launchImageLibrary(IMAGE_OPTIONS, (response) => {
			if (response.didCancel) {
				Alert.alert("Cancelled image selection");
			} else {
				setImagePreview(response.assets[0]?.uri);
			}
		});
	};

	const handleUpdateProfileOnPress = async () => {
		setIsLoading(true);
		await handleUpdateProfile(imagePreview, editUserName, () => {
			navigation.goBack();
			getUpdatedUserInformation(dispatch);
		});
		setIsLoading(false);
	};

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.profileDetails}>
					<UserProfileAvatar avatar={imagePreview} />
					<Button
						type={BUTTON_TYPES.TEXT}
						text="Change photo"
						style={styles.button}
						textStyle={styles.buttonText}
						onPress={handleSelectImage}
						isLoading={isLoading}
						isDisabled={isLoading}
					/>
					<TextInput
						onChangeText={setEditUsername}
						style={styles.editInput}
						value={editUserName}
						editable={!isLoading}
					/>
					{!informationNotUpdated && (
						<Button
							type={BUTTON_TYPES.PRIMARY}
							text="Finish Editing"
							style={styles.button}
							textStyle={styles.buttonText}
							onPress={handleUpdateProfileOnPress}
							isLoading={isLoading}
							isDisabled={isLoading}
						/>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

EditUserProfileScreen.propTypes = {
	navigation: PropTypes.object
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
		marginVertical: 24,
		width: width * 0.8,
		borderBottomWidth: 1,
		borderColor: COLOR_PALETTE.white
	},
	button: {
		marginTop: 24
	},
	buttonText: {
		color: COLOR_PALETTE.white,
		fontSize: 14 * PixelRatio.getFontScale(),
		fontWeight: "500"
	}
});
