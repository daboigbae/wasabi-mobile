import React from "react";
import {
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	FlatList,
	ScrollView,
	PixelRatio
} from "react-native";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Playlist from "../components/playlist/Playlist";
import { COLOR_PALETTE, HOME_SCREENS } from "../utils/constants";
import GlobalStyles from "../utils/GlobalStyles";
import { objToArray } from "../utils/utils";

const HomeScreen = ({ navigation }) => {
	const playlists = useSelector(({ music }) =>
		objToArray(music?.playlists || {})
	);

	const email = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.email
	);

	const onPress = async (playlist) => {
		await navigation.navigate(HOME_SCREENS.PLAYLIST_SCREEN, {
			playlist
		});
	};

	const renderPlaylists = () => (
		<FlatList
			style={styles.playlists}
			showsHorizontalScrollIndicator={false}
			data={playlists}
			horizontal={true}
			renderItem={({ item, index }) => (
				<Playlist
					key={item?.name}
					playlist={item}
					testId={`playlist:${index}`}
					onPress={() => onPress(item)}
				/>
			)}
			keyExtractor={(item) => item.name}
		/>
	);

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>
						{email ? `Welcome ${email}` : "Wasabi Music"}
					</Text>
					<Text style={styles.funText}>
						Wasabi Music is a music streaming platform. Listen to your favorite
						music NFTs and tell us what you think about them.
					</Text>
					<Text style={styles.title}>Popular Playlists</Text>
					{renderPlaylists()}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16
	},
	title: {
		color: COLOR_PALETTE.white,
		fontSize: 25 * PixelRatio.getFontScale(),
		fontWeight: "800",
		marginTop: 32
	},
	playlists: {
		marginVertical: 16
	},
	funText: {
		color: COLOR_PALETTE.white,
		fontSize: 16 * PixelRatio.getFontScale(),
		fontWeight: "300",
		paddingTop: 16
	}
});

HomeScreen.propTypes = {
	navigation: PropTypes.object
};

export default HomeScreen;
