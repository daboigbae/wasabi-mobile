import TrackPlayer from "react-native-track-player";

const service = async () => {
	TrackPlayer.addEventListener(
		"remote-play",
		async () => await TrackPlayer.play()
	);

	TrackPlayer.addEventListener(
		"remote-pause",
		async () => await TrackPlayer.pause()
	);

	TrackPlayer.addEventListener(
		"remote-stop",
		async () => await TrackPlayer.stop()
	);

	TrackPlayer.addEventListener("remote-next", async () => {
		await TrackPlayer.skipToNext();
	});

	TrackPlayer.addEventListener("remote-previous", async () => {
		await TrackPlayer.skipToPrevious();
	});
};

module.exports = service;
