import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Random function
Input:  limit - number of gifs to return
Return: GIFs of random results
*/
export const fetchRandomGIFs = async (limit = 1) => {
  const gifList = []
  const url = 'https://api.giphy.com/v1/gifs/random'
  const params = { api_key: API_KEY }

  for(let i = 0; i < limit; i++) {
      const { data: gifData } = await axios.get(url, { params })
      gifList.push(gifData.data)
  }

  return gifList
}
