import React from "react";
import { View, FlatList } from "react-native";
import SongHit from "./SongHit";
import PropTypes from "prop-types";
import { connectInfiniteHits } from "react-instantsearch-native";

const InfiniteHits = ({ hits, hasMore, refine }) => (
	<FlatList
		data={hits}
		keyExtractor={(item) => item.objectID}
		ItemSeparatorComponent={() => (
			<View className="border-b-2 border-slate-600" />
		)}
		onEndReached={() => hasMore && refine()}
		renderItem={({ item }) => <SongHit hit={item} />}
		ListFooterComponent={() => <View className="w-full h-[15%]" />}
	/>
);

InfiniteHits.propTypes = {
	hits: PropTypes.arrayOf(PropTypes.object).isRequired,
	hasMore: PropTypes.bool.isRequired,
	refine: PropTypes.func.isRequired
};

export default connectInfiniteHits(InfiniteHits);
