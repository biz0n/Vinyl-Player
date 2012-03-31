var songs = {};
chrome.extension.onRequest.addListener(
	function (request, sender, sendResponse) {
		if (request.content === "playlist") {
			songs = request.links;
		}
	}
);

function getSongs() {
	return songs;
}