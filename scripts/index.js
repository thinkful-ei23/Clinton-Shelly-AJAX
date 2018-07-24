'use strict';
/* global $ */

const API_KEY = 'AIzaSyAwrbvcBw6a8z5lD7mdMzUy7UWP76DLd14';
const mockData = {
	"kind": "youtube#searchListResponse",
	"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/9VA77WjjcKQWDSuMaQKfWY0_CJY\"",
	"nextPageToken": "CAUQAA",
	"regionCode": "US",
	"pageInfo": {
	 "totalResults": 1000000,
	 "resultsPerPage": 5
	},
	"items": [
	 {
		"kind": "youtube#searchResult",
		"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/YBi9HTxxnMHFEZ7w_Wc2Wn7Aa4k\"",
		"id": {
		 "kind": "youtube#video",
		 "videoId": "XzGiNL3Mxrg"
		},
		"snippet": {
		 "publishedAt": "2018-06-08T15:00:06.000Z",
		 "channelId": "UCyu8StPfZWapR6rfW_JgqcA",
		 "title": "Justice League Action | Batman In Action | DC Kids",
		 "description": "Unlike most superheroes, Batman does not possess any superpowers; so he must rely on his genius intellect, physical prowess, martial arts abilities, detective ...",
		 "thumbnails": {
			"default": {
			 "url": "https://i.ytimg.com/vi/XzGiNL3Mxrg/default.jpg",
			 "width": 120,
			 "height": 90
			},
			"medium": {
			 "url": "https://i.ytimg.com/vi/XzGiNL3Mxrg/mqdefault.jpg",
			 "width": 320,
			 "height": 180
			},
			"high": {
			 "url": "https://i.ytimg.com/vi/XzGiNL3Mxrg/hqdefault.jpg",
			 "width": 480,
			 "height": 360
			}
		 },
		 "channelTitle": "DC Kids",
		 "liveBroadcastContent": "none"
		}
	 },
	 {
		"kind": "youtube#searchResult",
		"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/zi1Qlp6itCG99fMW8UuGc_ewyxc\"",
		"id": {
		 "kind": "youtube#video",
		 "videoId": "36mEOgp3PVA"
		},
		"snippet": {
		 "publishedAt": "2018-07-11T05:15:34.000Z",
		 "channelId": "UCdPG86Ahrf9A8YzBnFDAaEg",
		 "title": "Imaginext Wayne Manor Batcave Toy Review + Justice League & Batman Put Joker In Jail",
		 "description": "Just4fun290 presents Imaginext Wayne Manor Batcave Toy Review + Justice League & Batman Put Joker In Jail!",
		 "thumbnails": {
			"default": {
			 "url": "https://i.ytimg.com/vi/36mEOgp3PVA/default.jpg",
			 "width": 120,
			 "height": 90
			},
			"medium": {
			 "url": "https://i.ytimg.com/vi/36mEOgp3PVA/mqdefault.jpg",
			 "width": 320,
			 "height": 180
			},
			"high": {
			 "url": "https://i.ytimg.com/vi/36mEOgp3PVA/hqdefault.jpg",
			 "width": 480,
			 "height": 360
			}
		 },
		 "channelTitle": "Just4fun290",
		 "liveBroadcastContent": "none"
		}
	 },
	 {
		"kind": "youtube#searchResult",
		"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/oWLguqyR4FDPWlmcr8_BQb49flU\"",
		"id": {
		 "kind": "youtube#video",
		 "videoId": "AjtBlcB7C5k"
		},
		"snippet": {
		 "publishedAt": "2018-04-20T16:43:33.000Z",
		 "channelId": "UCdk5Rgx0GXlpSqKrWuf-TKA",
		 "title": "Lego Batman Birthday Party",
		 "description": "Lego Batman Birthday Party is a Funny Lego Stop Motion Animation. Superman, Flash, Barbara, Alfred, Robin, Wonder Woman, Cyborg and Aquaman are ...",
		 "thumbnails": {
			"default": {
			 "url": "https://i.ytimg.com/vi/AjtBlcB7C5k/default.jpg",
			 "width": 120,
			 "height": 90
			},
			"medium": {
			 "url": "https://i.ytimg.com/vi/AjtBlcB7C5k/mqdefault.jpg",
			 "width": 320,
			 "height": 180
			},
			"high": {
			 "url": "https://i.ytimg.com/vi/AjtBlcB7C5k/hqdefault.jpg",
			 "width": 480,
			 "height": 360
			}
		 },
		 "channelTitle": "FK Films",
		 "liveBroadcastContent": "none"
		}
	 },
	 {
		"kind": "youtube#searchResult",
		"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/TL9yo7Tk3m6j5_EmmwsleJFkgo8\"",
		"id": {
		 "kind": "youtube#video",
		 "videoId": "qp7jROocTac"
		},
		"snippet": {
		 "publishedAt": "2017-07-14T13:48:00.000Z",
		 "channelId": "UCBKBef7sk1a4OWUMIBejOQQ",
		 "title": "¿Pueden las SUPERHORTES cocinar? ¡BATMAN hace una pizza GRUESA! Videos de DCTC Real Life SUPER HERO",
		 "description": "Subsribe to watch more videos :D.",
		 "thumbnails": {
			"default": {
			 "url": "https://i.ytimg.com/vi/qp7jROocTac/default.jpg",
			 "width": 120,
			 "height": 90
			},
			"medium": {
			 "url": "https://i.ytimg.com/vi/qp7jROocTac/mqdefault.jpg",
			 "width": 320,
			 "height": 180
			},
			"high": {
			 "url": "https://i.ytimg.com/vi/qp7jROocTac/hqdefault.jpg",
			 "width": 480,
			 "height": 360
			}
		 },
		 "channelTitle": "PN TV",
		 "liveBroadcastContent": "none"
		}
	 },
	 {
		"kind": "youtube#searchResult",
		"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/MI8SF6Xedz0puHsEAYOhtPgliwA\"",
		"id": {
		 "kind": "youtube#video",
		 "videoId": "sfv5lXeeNBY"
		},
		"snippet": {
		 "publishedAt": "2018-07-21T14:21:08.000Z",
		 "channelId": "UC7MNeyG3pCEx8Ij9mcss0-A",
		 "title": "Batman Evolution in Movies & TV (2018)",
		 "description": "Bruce Wayne, who witnessed the murder of his multi-millionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve mental and ...",
		 "thumbnails": {
			"default": {
			 "url": "https://i.ytimg.com/vi/sfv5lXeeNBY/default.jpg",
			 "width": 120,
			 "height": 90
			},
			"medium": {
			 "url": "https://i.ytimg.com/vi/sfv5lXeeNBY/mqdefault.jpg",
			 "width": 320,
			 "height": 180
			},
			"high": {
			 "url": "https://i.ytimg.com/vi/sfv5lXeeNBY/hqdefault.jpg",
			 "width": 480,
			 "height": 360
			}
		 },
		 "channelTitle": "SupHero",
		 "liveBroadcastContent": "none"
		}
	 }
	]
 };
/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
	videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
	const query = {
		q : `${searchTerm}`,
		key : API_KEY,
		part : 'snippet'
	};
	$.getJSON(BASE_URL, query, callback);
};

// fetchVideos('batman', response => console.log(response));


// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
	return response.items.map(item => {
		return {
			id: item.id.videoId,
			title: item.snippet.title,
			thumbnail: item.snippet.thumbnails.default.url,
		};
	});
};

// console.log(decorateResponse(mockData));

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
	return `
		<li data-video-id="${video.id}">
			<h3>${video.title}</h3>
			<img src="${video.thumbnail}" />
		</li>
	`;
};

// const decoratedVideo = decorateResponse(mockData);

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
	store.videos = videos;
};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
const html = store.videos.map(video => generateVideoItemHtml(video));
$('.results').html(html);
};

const decorated = decorateResponse(mockData);
store.videos = decorated;
render();

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
	// TASK:
	// 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
