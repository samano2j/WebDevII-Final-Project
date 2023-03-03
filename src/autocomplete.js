import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Autocomplete function
Input:  q - value from search bar
        limit - number of gifs to return
        offset(optional) - starting position/index of the result
Return: list of valid terms that completes the given tag
*/
export const fetchAutoComplete = async (q, limit = 1, offset = 0) => {
    const url = 'https://api.giphy.com/v1/gifs/search/tags'
    const params = {
      api_key: API_KEY,
      q,
      limit,
      offset
    }

    const { data: gifData } = await axios.get(url, { params })

    return gifData.data
}
