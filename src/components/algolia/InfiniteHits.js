import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import SongHit from "./SongHit";
import PropTypes from "prop-types";
import { connectInfiniteHits } from "react-instantsearch-native";

const windowHeight = Dimensions.get("window").height;

const InfiniteHits = ({ hits, hasMore, refine }) => (
	<FlatList
		data={hits}
		keyExtractor={(item) => item.objectID}
		ItemSeparatorComponent={() => <View style={styles.separator} />}
		onEndReached={() => hasMore && refine()}
		renderItem={({ item }) => <SongHit hit={item} />}
		ListFooterComponent={() => <View style={styles.footer} />}
	/>
);

InfiniteHits.propTypes = {
	hits: PropTypes.arrayOf(PropTypes.object).isRequired,
	hasMore: PropTypes.bool.isRequired,
	refine: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	separator: {
		borderBottomWidth: 1,
		borderColor: "#ddd"
	},

	titleText: {
		fontWeight: "bold"
	},
	footer: { height: windowHeight * 0.15, width: "100%" }
});

export default connectInfiniteHits(InfiniteHits);
