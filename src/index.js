import axios from "axios";

const SAMPLE_ENDPOINT = 'https://api.giphy.com/v1/gifs/trending'

window.addEventListener('load', async () => {
  const apiKey = process.env.API_KEY
  console.log('API KEY is', apiKey)
  const res = await axios.get(SAMPLE_ENDPOINT, { params: { api_key: apiKey } })
  console.log('Response is', res)
})
