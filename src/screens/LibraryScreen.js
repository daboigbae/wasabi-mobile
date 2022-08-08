import React from "react";
import { SafeAreaView } from "react-native";
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
		<SafeAreaView className="w-full h-full" style={GlobalStyles.appView}>
			<InstantSearch searchClient={searchClient} indexName="dev_WASABI">
				<SearchBox />
				<InfiniteHits />
			</InstantSearch>
		</SafeAreaView>
	);
};

export default LibraryScreen;
