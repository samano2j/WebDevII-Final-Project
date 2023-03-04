import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Trending Search function
Return:  list of the most popular trending search terms
*/
export const fetchTrendingSearch = async () => {
    const url = 'https://api.giphy.com/v1/trending/searches'
    const params = { api_key: API_KEY }

    const { data: gifData } = await axios.get(url, { params })

    return gifData.data
}
