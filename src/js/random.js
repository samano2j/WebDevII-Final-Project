import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Random function
Input:  limit - number of gifs to return
Return: GIFs of random results
*/
export const fetchRandomGIFs = async (limit = 1) => {
  const url = 'https://api.giphy.com/v1/gifs/random'
  const params = { api_key: API_KEY }
  const promiseList = []

  for(let i = 0; i < limit; i++) {
    promiseList.push(axios.get(url, { params }))
  }

  const gifList = await Promise.all(promiseList)

  return gifList.map(gif => gif.data.data)
}
