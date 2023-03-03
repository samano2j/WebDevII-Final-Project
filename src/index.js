import { fetchRandomGIFs } from "./random";
import { fetchTrendingGIFs } from "./trending";
import { fetchSearchGIFs } from "./search";
import { fetchCategoryGIFs } from "./categories";
import { fetchAutoComplete } from "./autocomplete"
import { fetchChannelSearch } from "./channelSearch";
import { fetchSearchSuggestions } from "./search-suggestion";
import { fetchTrendingSearch } from "./trending-search";

const SAMPLE_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending'

window.addEventListener('load', async () => {
  // THis is a test
  // const randomGIFs = await fetchRandomGIFs(30)
  // const trendingGIFs = await fetchTrendingGIFs(30)
  // const searchGIFs = await fetchSearchGIFs('cat', 30)

  // console.log({ randomGIFs, trendingGIFs, searchGIFs })

  // const categoryGIFs = await fetchCategoryGIFs()
  // console.log(categoryGIFs)  
  // const autoComplete = await fetchAutoComplete('cat', 5)
  // console.log(autoComplete)
  // const channelSearch = await fetchChannelSearch('cat', 5)
  // console.log(channelSearch)
  // const searchSuggestions = await fetchSearchSuggestions('cat')
  // console.log(searchSuggestions)
  // const trendingSearch = await fetchTrendingSearch()
  // console.log(trendingSearch)

})
