import './scss/style.scss'
import './images/logo.png'
import './images/trend.png'
import './images/shuffle.png'
import { toggleNav } from "./js/hamburgermenu";
import { fetchRandomGIFs } from "./js/random";
import { fetchTrendingGIFs } from "./js/trending";
import { fetchSearchGIFs } from "./js/search";
import { fetchCategoryGIFs } from "./js/categories";
import { fetchAutoComplete } from "./js/autocomplete"
import { fetchChannelSearch } from "./js/channelSearch";
import { fetchSearchSuggestions } from "./js/search-suggestion";
import { fetchTrendingSearch } from "./js/trending-search";
import $ from "jquery";

const SAMPLE_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending'

window.addEventListener('load', async () => {
  
  const trendingSearch = await fetchTrendingSearch()
  for (let i = 0; i < 3; i++) {
    const trendingTag = document.createElement('li')
    $(trendingTag).html(`<button>#${trendingSearch[i]}</button>`)
    $('.trending-tags').append(trendingTag)
  }
  
  const trendingGIFs = await fetchTrendingGIFs(16)
  for (let i = 1; i < 17; i++) {
    let currNum = i

    if ((currNum - 4) <= 0 ) {
      currNum = i
    }
    else {
      while (currNum > 0) {
        currNum -= 4
      }
      currNum += 4
    }
    const randomNum = Math.floor(Math.random() * 300) + 100
    const gifItem = document.createElement('div')
    $(gifItem).css({"background-image": `url(${trendingGIFs[i - 1].images.downsized.url})`})
    $(gifItem).height(randomNum)
    $(gifItem).addClass('gifItemClass')
    $(`.main-top .gif-container .column-${currNum}`).append(gifItem)
  }

  const randomGIFs = await fetchRandomGIFs(16)
  for (let i = 1; i < 17; i++) {
    let currNum = i

    if ((currNum - 4) <= 0 ) {
      currNum = i
    }
    else {
      while (currNum > 0) {
        currNum -= 4
      }
      currNum += 4
    }
    const randomNum = Math.floor(Math.random() * 300) + 100
    const gifItem = document.createElement('div')
    $(gifItem).css({"background-image": `url(${randomGIFs[i - 1].images.downsized.url})`})
    $(gifItem).height(randomNum)
    $(gifItem).addClass('gifItemClass')
    $(`.main-bottom .gif-container .column-${currNum}`).append(gifItem)
  }

})

$('#submit_btn').click(async function(event) {
  event.preventDefault()
  if ($('#search_word').val().trim().length != 0) {
    $('.main-top').css({'display':'none'})
    $('.main-bottom').css({'display':'none'})
    $('.main-search').css({'display':'block'})

    const q = $('#search_word').val().trim()
    const searchGIFs = await fetchSearchGIFs(q, 50)
    $(".main-search .gif-container").empty()
    $(`.main-search .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)
    $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
    for (let i = 1; i < 50; i++) {
      let currNum = i

      if ((currNum - 4) <= 0 ) {
        currNum = i
      }
      else {
        while (currNum > 0) {
          currNum -= 4
        }
        currNum += 4
      }
      
      const gifItem = document.createElement('div')
      const randomNum = Math.floor(Math.random() * 300) + 100
      $(gifItem).height(randomNum)
      $(gifItem).css({"background-image": `url(${searchGIFs[i - 1].images.downsized.url})`})
      $(gifItem).addClass('gifItemClass')
      $(`.main-search .gif-container .column-${currNum}`).append(gifItem)
    }

    const relatedSuggestion = await fetchSearchSuggestions(q)
    for (let i = 0; i < 3; i++) {
      const relatedTag = document.createElement('li')
      $(relatedTag).html(`<button>#${relatedSuggestion[i].name}</button>`)
      $('.related-tags').append(relatedTag)
    }

    $('#search_word').val(' ')
    $(".autocomplete").empty()
  }
})

$('.siteIcon').click(async function(event) {
  event.preventDefault()
  $('.main-search').css({'display':'none'})
  $('.main-top').css({'display':'block'})
  $('.main-bottom').css({'display':'block'})

  $(`.main-top .gif-container`).empty()
    $(`.main-top .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)

    const trendingGIFs = await fetchTrendingGIFs(16)
    for (let i = 1; i < 17; i++) {
      let currNum = i
  
      if ((currNum - 4) <= 0 ) {
        currNum = i
      }
      else {
        while (currNum > 0) {
          currNum -= 4
        }
        currNum += 4
      }
      const randomNum = Math.floor(Math.random() * 300) + 100
      const gifItem = document.createElement('div')
      $(gifItem).css({"background-image": `url(${trendingGIFs[i - 1].images.downsized.url})`})
      $(gifItem).height(randomNum)
      $(gifItem).addClass('gifItemClass')
      $(`.main-top .gif-container .column-${currNum}`).append(gifItem)
    }

    $(".main-bottom .gif-container").empty()
    $(`.main-bottom .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)

    const randomGIFs = await fetchRandomGIFs(16)
    for (let i = 1; i < 17; i++) {
      let currNum = i
  
      if ((currNum - 4) <= 0 ) {
        currNum = i
      }
      else {
        while (currNum > 0) {
          currNum -= 4
        }
        currNum += 4
      }
      const randomNum = Math.floor(Math.random() * 300) + 100
      const gifItem = document.createElement('div')
      $(gifItem).css({"background-image": `url(${randomGIFs[i - 1].images.downsized.url})`})
      $(gifItem).height(randomNum)
      $(gifItem).addClass('gifItemClass')
      $(`.main-bottom .gif-container .column-${currNum}`).append(gifItem)
    }
})

$('.search-box input').keyup(async function(event) {
  const q = $('#search_word').val().trim()
  const autoComplete = await fetchAutoComplete(q, 3)
  $(".autocomplete").empty()
  for (let i = 0; i < 5; i++) {
    const word = document.createElement('p')
    $(word).html(`${autoComplete[i].name}`)
    $(".autocomplete").append(word)
  }
})

$('.autocomplete').click(async function(event){
  event.preventDefault()
  
  $('.main-top').css({'display':'none'})
  $('.main-bottom').css({'display':'none'})
  $('.main-search').css({'display':'block'})

  const q = $(event.target).html()
  const searchGIFs = await fetchSearchGIFs(q, 50)
  $(".main-search .gif-container").empty()
  $(`.main-search .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)
  $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
  for (let i = 1; i < 50; i++) {
    let currNum = i

    if ((currNum - 4) <= 0 ) {
      currNum = i
    }
    else {
      while (currNum > 0) {
        currNum -= 4
      }
      currNum += 4
    }

    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 300) + 100
    $(gifItem).height(randomNum)
    $(gifItem).css({"background-image": `url(${searchGIFs[i - 1].images.downsized.url})`})
    $(gifItem).addClass('gifItemClass')
    $(`.main-search .gif-container .column-${currNum}`).append(gifItem)
  }

  const relatedSuggestion = await fetchSearchSuggestions(q)
  for (let i = 0; i < 3; i++) {
    const relatedTag = document.createElement('li')
    $(relatedTag).html(`<button>#${relatedSuggestion[i].name}</button>`)
    $('.related-tags').append(relatedTag)
  }

  $('#search_word').val(' ')
  $(".autocomplete").empty()
})

$('.group').click(async function(event) {
  event.preventDefault()
  if($(event.target).attr('alt') == 'trending' || $(event.target).html() == 'Trending') {
    $('.main-search').css({'display':'none'})
    $('.main-top').css({'display':'block'})
    $('.main-bottom').css({'display':'none'})

    $(`.main-top .gif-container`).empty()
    $(`.main-top .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)

    const trendingGIFs = await fetchTrendingGIFs(50)
    for (let i = 1; i < 50; i++) {
      let currNum = i
  
      if ((currNum - 4) <= 0 ) {
        currNum = i
      }
      else {
        while (currNum > 0) {
          currNum -= 4
        }
        currNum += 4
      }
      const randomNum = Math.floor(Math.random() * 300) + 100
      const gifItem = document.createElement('div')
      $(gifItem).css({"background-image": `url(${trendingGIFs[i - 1].images.downsized.url})`})
      $(gifItem).height(randomNum)
      $(gifItem).addClass('gifItemClass')
      $(`.main-top .gif-container .column-${currNum}`).append(gifItem)
    }
  }

  if($(event.target).attr('alt') == 'random' || $(event.target).html() == 'Random') {
    $('.main-search').css({'display':'none'})
    $('.main-top').css({'display':'none'})
    $('.main-bottom').css({'display':'block'})
    $(".main-bottom .gif-container").empty()
    $(`.main-bottom .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)

    const randomGIFs = await fetchRandomGIFs(50)
    for (let i = 1; i < 50; i++) {
      let currNum = i
  
      if ((currNum - 4) <= 0 ) {
        currNum = i
      }
      else {
        while (currNum > 0) {
          currNum -= 4
        }
        currNum += 4
      }
      const randomNum = Math.floor(Math.random() * 300) + 100
      const gifItem = document.createElement('div')
      $(gifItem).css({"background-image": `url(${randomGIFs[i - 1].images.downsized.url})`})
      $(gifItem).height(randomNum)
      $(gifItem).addClass('gifItemClass')
      $(`.main-bottom .gif-container .column-${currNum}`).append(gifItem)
    }
  }

  $('#search_word').val(' ')
  $(".autocomplete").empty()
})

$('.headerNav').click(async function(event) {
  event.preventDefault()

  $('.main-top').css({'display':'none'})
  $('.main-bottom').css({'display':'none'})
  $('.main-search').css({'display':'block'})

  const q = $(event.target).html()
  const searchGIFs = await fetchSearchGIFs(q, 50)
  $(".main-search .gif-container").empty()
  $(`.main-search .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)
  $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
  for (let i = 1; i < 50; i++) {
    let currNum = i

    if ((currNum - 4) <= 0 ) {
      currNum = i
    }
    else {
      while (currNum > 0) {
        currNum -= 4
      }
      currNum += 4
    }

    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 300) + 100
    $(gifItem).height(randomNum)
    $(gifItem).css({"background-image": `url(${searchGIFs[i - 1].images.downsized.url})`})
    $(gifItem).addClass('gifItemClass')
    $(`.main-search .gif-container .column-${currNum}`).append(gifItem)
  }

  const relatedSuggestion = await fetchSearchSuggestions(q)
  for (let i = 0; i < 3; i++) {
    const relatedTag = document.createElement('li')
    $(relatedTag).html(`<button>#${relatedSuggestion[i].name}</button>`)
    $('.related-tags').append(relatedTag)
  }

  $('#search_word').val(' ')
  $(".autocomplete").empty()
})

$('.trending-tags').click(async function(event){ 
  event.preventDefault()

  $('.main-top').css({'display':'none'})
  $('.main-bottom').css({'display':'none'})
  $('.main-search').css({'display':'block'})

  const q = $(event.target).html().replace('#', '')
  const searchGIFs = await fetchSearchGIFs(q, 50)
  $(".main-search .gif-container").empty()
  $(`.main-search .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)
  $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
  for (let i = 1; i < 50; i++) {
    let currNum = i

    if ((currNum - 4) <= 0 ) {
      currNum = i
    }
    else {
      while (currNum > 0) {
        currNum -= 4
      }
      currNum += 4
    }
    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 300) + 100
    $(gifItem).height(randomNum)
    $(gifItem).css({"background-image": `url(${searchGIFs[i - 1].images.downsized.url})`})
    $(gifItem).addClass('gifItemClass')
    $(`.main-search .gif-container .column-${currNum}`).append(gifItem)
  }

  const relatedSuggestion = await fetchSearchSuggestions(q)
  for (let i = 0; i < 3; i++) {
    const relatedTag = document.createElement('li')
    $(relatedTag).html(`<button>#${relatedSuggestion[i].name}</button>`)
    $('.related-tags').append(relatedTag)
  }

  $('#search_word').val(' ')
  $(".autocomplete").empty()
}) 

$('.main-search').click(async function(event){ 
  event.preventDefault()
  if($(event.target).is("button")) {
    $('.main-top').css({'display':'none'})
    $('.main-bottom').css({'display':'none'})
    $('.main-search').css({'display':'block'})

    const q = $(event.target).html().replace('#', '')
    const searchGIFs = await fetchSearchGIFs(q, 50)
    $(".main-search .gif-container").empty()
    $(`.main-search .gif-container`).html(`<div class="gifColumn column-1"></div>
    <div class="gifColumn column-2"></div>
    <div class="gifColumn column-3"></div>
    <div class="gifColumn column-4"></div>`)
    $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
    for (let i = 1; i < 50; i++) {
      let currNum = i

      if ((currNum - 4) <= 0 ) {
        currNum = i
      }
      else {
        while (currNum > 0) {
          currNum -= 4
        }
        currNum += 4
      }

      const gifItem = document.createElement('div')
      const randomNum = Math.floor(Math.random() * 300) + 100
      $(gifItem).height(randomNum)
      $(gifItem).css({"background-image": `url(${searchGIFs[i - 1].images.downsized.url})`})
      $(gifItem).addClass('gifItemClass')
      $(`.main-search .gif-container .column-${currNum}`).append(gifItem)
    }

    const relatedSuggestion = await fetchSearchSuggestions(q)
    for (let i = 0; i < 3; i++) {
      const relatedTag = document.createElement('li')
      $(relatedTag).html(`<button>#${relatedSuggestion[i].name}</button>`)
      $('.related-tags').append(relatedTag)
    }

    $('#search_word').val(' ')
    $(".autocomplete").empty()
  }
})

toggleNav()
