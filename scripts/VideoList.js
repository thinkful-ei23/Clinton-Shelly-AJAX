'use strict';
/* eslint-disable no-unused-vars, no-console */
/* global $, store, API */

const videoList =(function() {
  function generateListItem(video) {
    return `
      <li data-video-id="${video.id}">
        <h3>${video.title}</h3>
        <a href="#"><img src="${video.thumbnail}" /></a>
        </br>
        (<a href="https://www.youtube.com/channel/${video.channelId}" target="_blank">More from ${video.channelTitle}</a>)
      </li>`;
  }

  let render = function() {
    const html = store.videos.map(video => generateListItem(video));
    $('.results').html(html);
    $('.navigation').html(`
      <p>
        <a class="js-prev" href="#">Previous Results
        </a> | <a class="js-next" href="#">Next Results
        </a>
      </p>`);
  };

  function handleFormSubmit() {
    $('.js-search-form').submit(function() {
      event.preventDefault();
      store.searchTerm = $('#search-term').val();
      $('#search-term').val('');
      API.fetchVideos(response => {
        store.setVideos(API.decorateResponse(response));
        store.setNextPage(response);
        store.setPrevPage(response);
        render();
      });
    });
  }

  function handlePrevPage() {
    $('.navigation').on('click', '.js-prev', function() {
      const pageToken = store.prevPage;
      API.fetchPrev(pageToken, response => {
        store.setVideos(API.decorateResponse(response));
        store.setNextPage(response);
        store.setPrevPage(response);
        render();
      });
    });
  }

  function handleNextPage() {
    $('.navigation').on('click', '.js-next', function() {
      const pageToken = store.nextPage;
      API.fetchNext(pageToken, response => {
        store.setVideos(API.decorateResponse(response));
        store.setNextPage(response);
        store.setPrevPage(response);
        render();
      });
    });
  }

  function handleVideoHover() {
    $('.results').on('mouseover', 'img', function() {
      $(this).css('outline', '1px solid red');
    });
    $('.results').on('mouseleave', 'img', function() {
      $(this).css('outline', 'none');
    });
  }

  function handleVideoClick() {
    $('.results').on('click', 'img', function() {
      const id = $(this).closest('li').attr('data-video-id');
      $('.lightbox').css('display', 'block');
      $('.lightbox-content').html(generateLightbox(id));
    });
  }

  function generateLightbox(id) {
    return `
      <a class="close-video" href="#">
        <span class="close-cursor">&times;</span>
      </a>
      <iframe width="420" height="315"                
        src="https://www.youtube.com/embed/${id}?autoplay=1">
      </iframe>`;
  }

  function handleVideoClose() {
    $('.lightbox-content').on('click', '.close-video', function() {
      $('.lightbox').css('display', 'none');
      $('.lightbox-content').html('');
    });
  }

  let bindEventListeners = function() {
    handleFormSubmit();
    handleVideoHover();
    handleVideoClick();
    handleVideoClose();
    handleNextPage();
    handlePrevPage();
  };

  return {render, bindEventListeners};

}() );