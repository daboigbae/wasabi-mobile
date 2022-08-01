import React, { useEffect } from "react";
import {
	BackHandler,
	Image,
	PixelRatio,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native";
import PropTypes from "prop-types";
import GlobalStyles from "../utils/GlobalStyles";
import { COLOR_PALETTE } from "../utils/constants";
import MoreIcon from "../components/common/icons/MoreIcon";
import PlayIcon from "../components/common/icons/PlayIcon";
import { handlePlaylistChange } from "../utils/MusicPlayerUtil";

const PlaylistScreen = ({ route, navigation }) => {
	const { playlist } = route.params;

	const onPress = async () => {
		await handlePlaylistChange(playlist?.songs);
	};
	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				navigation.goBack();
				return true;
			}
		);

		return () => backHandler.remove();
	}, []);
	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.artworkContainer}>
						<Image
							style={styles.tinyLogo}
							source={{
								uri: playlist?.artwork
							}}
						/>
					</View>
					<Text style={styles.playlistName}>{playlist?.name}</Text>
					<Text style={styles.funText}>Songs: {playlist?.songs?.length}</Text>
					<View style={styles.playlistControls}>
						<MoreIcon />
						<PlayIcon onPress={onPress} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

PlaylistScreen.propTypes = {
	route: PropTypes.object.isRequired,
	navigation: PropTypes.object
};

export default PlaylistScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16
	},
	artworkContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16
	},
	tinyLogo: {
		width: 175,
		height: 175,
		borderRadius: 8
	},
	playlistName: {
		color: COLOR_PALETTE.white,
		fontSize: 20 / PixelRatio.getFontScale(),
		letterSpacing: 1
	},
	funText: {
		color: COLOR_PALETTE.white,
		fontSize: 16 / PixelRatio.getFontScale(),
		marginTop: 8
	},
	playlistControls: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	}
});
