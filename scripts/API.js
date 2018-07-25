'use strict';
/* eslint-disable no-unused-vars, no-console */
/* global $, store */

const API = (function() {
  let API_KEY = 'AIzaSyAwrbvcBw6a8z5lD7mdMzUy7UWP76DLd14';
  let BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  let fetchVideos = function(callback) {
    const query = {
      q : store.searchTerm,
      key : API_KEY,
      part : 'snippet'
    };
    $.getJSON(BASE_URL, query, callback);
  };

  let fetchNext = function(pageToken, callback) {
    const query = {
      q : store.searchTerm,
      key : API_KEY,
      part : 'snippet',
      pageToken : pageToken,
    };
    $.getJSON(BASE_URL, query, callback);
  };

  let fetchPrev = function(pageToken, callback) {
    const query = {
      q : store.searchTerm,
      key : API_KEY,
      part : 'snippet',
      pageToken : pageToken,
    };
    $.getJSON(BASE_URL, query, callback);
  };
  
  let decorateResponse = function(response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
      };
    });
  };

  return {fetchVideos, fetchNext, fetchPrev, decorateResponse};
}() );