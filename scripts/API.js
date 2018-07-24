/* eslint-disable no-unused-vars */
'use strict';

const API = (function() {
  let API_KEY = 'AIzaSyAwrbvcBw6a8z5lD7mdMzUy7UWP76DLd14';
	let BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
	let fetchVideos = function(searchTerm, callback) {
		const query = {
			q : searchTerm,
			key : this.API_KEY,
			part : 'snippet'
		};
		$.getJSON(this.BASE_URL, query, callback);
	};

	return {API_KEY, BASE_URL,fetchVideos};
}() );
