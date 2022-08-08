import React, { useEffect } from "react";
import {
	BackHandler,
	FlatList,
	SafeAreaView,
	StyleSheet,
	View
} from "react-native";
import PropTypes from "prop-types";
import GlobalStyles from "../utils/GlobalStyles";

import PlaylistDetails from "../components/playlist/PlaylistDetails";
import Song from "../components/Song";

const PlaylistScreen = ({ route, navigation }) => {
	const { playlist } = route.params;

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
			<View className="flex-1 px-4">
				<FlatList
					ListHeaderComponent={<PlaylistDetails playlist={playlist} />}
					showsVerticalScrollIndicator={false}
					data={playlist?.songs}
					renderItem={({ item, index }) => (
						<Song
							key={index}
							song={item}
							index={index}
							playlist={playlist?.songs}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

PlaylistScreen.propTypes = {
	route: PropTypes.object.isRequired,
	navigation: PropTypes.object
};

export default PlaylistScreen;
