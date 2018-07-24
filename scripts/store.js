/* eslint-disable no-unused-vars */
'use strict';

const store = (function() {
	let videos = [];
	let setVideos = function(videos) {
		this.videos = videos;
	};

	return {videos, setVideos};
}() );