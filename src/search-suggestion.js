import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Search Suggestion function
Input:  term - value from search bar
Return: list of tag terms related to the given tag
*/
export const fetchSearchSuggestions = async (term) => {
    const url = `https://api.giphy.com/v1/tags/related/<${term}>`
    const params = { api_key: API_KEY }
    
    const { data: gifData } = await axios.get(url, { params })

    return gifData.data
}
