/* eslint-disable-next-line no-unused-vars */
/*global store, API, decorateResponse, $*/
'use strict';

const videoList =(function() {
	function generateListItem(video) {
		return `
      <li data-video-id="${video.id}">
        <h3>${video.title}</h3>
        <img src="${video.thumbnail}" />
      </li>`;
	}

	let render = function() {
		const html = store.videos.map(video => generateListItem(video));
		$('.results').html(html);
	};

	function handleFormSubmit() {
		$('.js-search-form').on('submit', function() {
			event.preventDefault();
			console.log('something was submitted');
			const searchedTerm = $('#search-term').val();
			$('#search-term').val('');
			API.fetchVideos(searchedTerm, response => {
				store.setVideos(API.decorateResponse(response));
				render();
			});
		});
	}

	let bindEventListeners = function() {
		handleFormSubmit();
	};

	return {render, bindEventListeners};

}() );