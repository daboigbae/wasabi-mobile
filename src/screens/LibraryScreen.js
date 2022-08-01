import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { InstantSearch } from "react-instantsearch-native";
import algoliasearch from "algoliasearch/lite";

import GlobalStyles from "../utils/GlobalStyles";
import SearchBox from "../components/algolia/SearchBox";
import InfiniteHits from "../components/algolia/InfiniteHits";

import { REACT_APP_ALGOLIA_APP_ID, REACT_APP_ALGOLIA_API_KEY } from "@env";

const LibraryScreen = () => {
	const searchClient = algoliasearch(
		REACT_APP_ALGOLIA_APP_ID,
		REACT_APP_ALGOLIA_API_KEY
	);

	return (
		<SafeAreaView style={[styles.container, GlobalStyles.appView]}>
			<InstantSearch searchClient={searchClient} indexName="dev_WASABI">
				<SearchBox />
				<InfiniteHits />
			</InstantSearch>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		position: "relative"
	},

	flexContainer: {
		flex: 1,
		width: "100%",
		paddingTop: 20,
		paddingHorizontal: 20
	},

	detailsContainer: {
		height: "auto",
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start"
	},

	playlistImage: {
		height: 120,
		width: 120,
		borderRadius: 8
	},

	contentContainer: {
		height: 120,
		flex: 1,
		padding: 12
	},

	titleText: {
		fontSize: 18,
		fontWeight: "bold"
	},

	songList: {
		paddingBottom: 165
	}
});

export default LibraryScreen;
