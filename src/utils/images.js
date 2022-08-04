import { launchImageLibrary } from "react-native-image-picker";

export const handleSelectImage = async (callback) => {
	const IMAGE_OPTIONS = {
		maxWidth: 500,
		maxHeight: 500
	};
	await launchImageLibrary(IMAGE_OPTIONS, (response) => {
		callback && callback(response);
	});
};
