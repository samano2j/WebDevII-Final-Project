import './scss/style.scss'
import './images/logo.png'
import './images/trend.png'
import './images/shuffle.png'
import { toggleNav } from "./js/hamburgermenu";
import { fetchRandomGIFs } from "./js/random";
import { fetchTrendingGIFs } from "./js/trending";
import { fetchSearchGIFs } from "./js/search";
import { fetchAutoComplete } from "./js/autocomplete"
import { fetchSearchSuggestions } from "./js/search-suggestion";
import { fetchTrendingSearch } from "./js/trending-search";
import $ from "jquery";

window.addEventListener('load', async () => {
  const trendingSearch = await fetchTrendingSearch()
  for (let i = 0; i < 3; i++) {
    const trendingTag = document.createElement('li')
    $(trendingTag).html(`<button>#${trendingSearch[i]}</button>`)
    $('.trending-tags').append(trendingTag)
  }

  const trendingGIFs = await fetchTrendingGIFs(12)
  for (let i = 0; i < 12; i++) {
    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 200) + 150

    $(gifItem).css({"background-image": `url(${trendingGIFs[i].images.downsized.url})`})
    $(gifItem).height(randomNum)
    $(gifItem).addClass('gifItemClass')
    $(".main-top .gif-container").append(gifItem)
  }

  const randomGIFs = await fetchRandomGIFs(12)
  for (let i = 0; i < 12; i++) {
    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 200) + 100

    $(gifItem).css({"background-image": `url(${randomGIFs[i].images.downsized.url})`})
    $(gifItem).height(randomNum)
    $(gifItem).addClass('gifItemClass')
    $(".main-bottom .gif-container").append(gifItem)
  }

})

$('#submit_btn').click(async function(event) {
  event.preventDefault()
  if ($('#search_word').val().trim().length != 0) {
    $('.main-top').css({'display':'none'})
    $('.main-bottom').css({'display':'none'})
    $('.main-search').css({'display':'block'})

    const q = $('#search_word').val().trim()
    const searchGIFs = await fetchSearchGIFs(q, 12)
    $(".main-search .gif-container").empty()
    $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
    for (let i = 0; i < 12; i++) {
      const gifItem = document.createElement('div')
      const randomNum = Math.floor(Math.random() * 200) + 100
      $(gifItem).height(randomNum)
      $(gifItem).css({"background-image": `url(${searchGIFs[i].images.downsized.url})`})
      $(gifItem).addClass('gifItemClass')
      $(".main-search .gif-container").append(gifItem)
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

$('.siteIcon').click(function(event) {
  event.preventDefault()
  $('.main-search').css({'display':'none'})
  $('.main-top').css({'display':'block'})
  $('.main-bottom').css({'display':'block'})
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
  const searchGIFs = await fetchSearchGIFs(q, 12)
  $(".main-search .gif-container").empty()
  $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
  for (let i = 0; i < 12; i++) {
    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 200) + 100
    $(gifItem).height(randomNum)
    $(gifItem).css({"background-image": `url(${searchGIFs[i].images.downsized.url})`})
    $(gifItem).addClass('gifItemClass')
    $(".main-search .gif-container").append(gifItem)
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

$('.main-img').click(async function(event) {
  event.preventDefault()
  if($(event.target).attr('alt') == 'trending') {
    $('.main-search').css({'display':'none'})
    $('.main-top').css({'display':'block'})
    $('.main-bottom').css({'display':'none'})
  }

  if($(event.target).attr('alt') == 'random') {
    $('.main-search').css({'display':'none'})
    $('.main-top').css({'display':'none'})
    $('.main-bottom').css({'display':'block'})
    $(".main-bottom .gif-container").empty()

    const randomGIFs = await fetchRandomGIFs(12)
    for (let i = 0; i < 12; i++) {
      const gifItem = document.createElement('div')
      const randomNum = Math.floor(Math.random() * 200) + 100
      $(gifItem).height(randomNum)
      $(gifItem).css({"background-image": `url(${randomGIFs[i].images.downsized.url})`})
      $(gifItem).addClass('gifItemClass')
      $(".main-bottom .gif-container").append(gifItem)
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
  const searchGIFs = await fetchSearchGIFs(q, 12)
  $(".main-search .gif-container").empty()
  $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
  for (let i = 0; i < 12; i++) {
    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 200) + 100
    $(gifItem).height(randomNum)
    $(gifItem).css({"background-image": `url(${searchGIFs[i].images.downsized.url})`})
    $(gifItem).addClass('gifItemClass')
    $(".main-search .gif-container").append(gifItem)
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
  const searchGIFs = await fetchSearchGIFs(q, 12)
  $(".main-search .gif-container").empty()
  $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
  for (let i = 0; i < 12; i++) {
    const gifItem = document.createElement('div')
    const randomNum = Math.floor(Math.random() * 200) + 100
    $(gifItem).height(randomNum)
    $(gifItem).css({"background-image": `url(${searchGIFs[i].images.downsized.url})`})
    $(gifItem).addClass('gifItemClass')
    $(".main-search .gif-container").append(gifItem)
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
    const searchGIFs = await fetchSearchGIFs(q, 12)
    $(".main-search .gif-container").empty()
    $('.main-search .main-title').html(`<p>Searched by: ${q}</p><ul class="related-tags"></ul>`)
    for (let i = 0; i < 12; i++) {
      const gifItem = document.createElement('div')
      const randomNum = Math.floor(Math.random() * 200) + 100
      $(gifItem).height(randomNum)
      $(gifItem).css({"background-image": `url(${searchGIFs[i].images.downsized.url})`})
      $(gifItem).addClass('gifItemClass')
      $(".main-search .gif-container").append(gifItem)
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

// $(window).scroll(function () {
//   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//     console.log("Near bottom!")
//   }
// })
