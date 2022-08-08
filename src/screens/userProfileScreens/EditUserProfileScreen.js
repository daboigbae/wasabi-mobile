import React, { useMemo, useState } from "react";
import {
	Alert,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TextInput,
	View
} from "react-native";
import PropTypes from "prop-types";
import UserProfileAvatar from "../../components/profile/UserProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "../../utils/GlobalStyles";
import Button, { BUTTON_TYPES } from "../../components/common/Button";
import {
	getUpdatedUserInformation,
	handleUpdateProfile
} from "../../utils/firebase";
import { handleSelectImage } from "../../utils/images";

const EditUserProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const displayName = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.displayName
	);

	const photoURL = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.photoURL
	);

	const [editUsername, setEditUsername] = useState(
		displayName || "Default User"
	);
	const [imagePreview, setImagePreview] = useState(photoURL || "");
	const [isLoading, setIsLoading] = useState(false);

	const informationNotUpdated = useMemo(() => {
		return displayName === editUsername && photoURL === imagePreview;
	}, [editUsername, imagePreview]);

	const imageIsNotUpdatedOrEmpty = useMemo(() => {
		return imagePreview === (photoURL || "");
	}, [imagePreview]);

	const handleSelectImageOnPress = async () => {
		await handleSelectImage((response) => {
			if (response.didCancel) {
				Alert.alert("Cancelled image selection");
			} else {
				setImagePreview(response.assets[0]?.uri);
			}
		});
	};

	const handleUpdateProfileOnPress = async () => {
		setIsLoading(true);
		const data = {
			username: editUsername,
			imagePreview: imageIsNotUpdatedOrEmpty ? null : imagePreview
		};
		await handleUpdateProfile(data, () => {
			navigation.goBack();
			getUpdatedUserInformation(dispatch);
		});
		setIsLoading(false);
	};

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView className="flex-1 pt-[10%]">
				<View className="flex-1 px-4 justify-center items-center">
					<UserProfileAvatar avatar={imagePreview} />
					<Button
						type={BUTTON_TYPES.TEXT}
						text="Change photo"
						style={"mt-5"}
						textStyle={"text-white text-base font-normal"}
						onPress={handleSelectImageOnPress}
						isLoading={isLoading}
						isDisabled={isLoading}
					/>
					<TextInput
						onChangeText={setEditUsername}
						className="text-white text-4xl font-bold text-center my-5 w-[80%] border-b-2 border-white"
						value={editUsername}
						editable={!isLoading}
					/>
					{!informationNotUpdated && (
						<Button
							type={BUTTON_TYPES.PRIMARY}
							text="Finish Editing"
							style={"mt-5"}
							textStyle={"text-white text-lg font-bold"}
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
