import { fetchRandomGIFs } from "./random";
import { fetchTrendingGIFs } from "./trending";
import { fetchSearchGIFs } from "./search";

const SAMPLE_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending'

window.addEventListener('load', async () => {
  // THis is a test
  const randomGIFs = await fetchRandomGIFs(30)
  const trendingGIFs = await fetchTrendingGIFs(30)
  const searchGIFs = await fetchSearchGIFs('cat', 30)

  console.log({ randomGIFs, trendingGIFs, searchGIFs })
})
