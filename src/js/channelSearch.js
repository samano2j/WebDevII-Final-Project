import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Channel Search function
Input:  q - value from search bar
        limit - number of gifs to return
        offset(optional) - starting position/index of the result
Return: GIPHY channels matching the query term
*/
export const fetchChannelSearch = async (q, limit = 1, offset = 0) => {
    const url = 'https://api.giphy.com/v1/channels/search'
    const params = {
      api_key: API_KEY,
      q,
      limit,
      offset
    }

    const { data: gifData } = await axios.get(url, { params })

    return gifData.data
}
