/* eslint-disable no-unused-vars */
'use strict';

const store = (function() {
  let videos = [];
  let searchTerm = '';
  let prevPage = '';
  let nextPage = '';

  let setVideos = function(videos) {
    this.videos = videos;
  };

  let setNextPage = function(response) {
    this.nextPage = response.nextPageToken;
  };

  let setPrevPage = function(response) {
    this.prevPage = response.prevPageToken;
  };

  return {videos, searchTerm, prevPage, nextPage, setVideos, setNextPage, setPrevPage};
}() );