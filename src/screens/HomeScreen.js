import React from "react";
import { SafeAreaView, Text, View, FlatList, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Playlist from "../components/playlist/Playlist";
import { HOME_SCREENS } from "../utils/constants";
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
		<SafeAreaView className="w-full h-full" style={GlobalStyles.appView}>
			<ScrollView>
				<View className="px-4">
					<Text className="text-white text-2xl font-bold mt-8">
						{email ? `Welcome ${email}` : "Wasabi Music"}
					</Text>
					<Text className="text-white font-light text-xl mt-4">
						Wasabi Music is a music streaming platform. Listen to your favorite
						music NFTs and tell us what you think about them.
					</Text>
					<Text className="text-white text-2xl font-bold mt-8">
						Popular Playlists
					</Text>
					{renderPlaylists()}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

HomeScreen.propTypes = {
	navigation: PropTypes.object
};

export default HomeScreen;
