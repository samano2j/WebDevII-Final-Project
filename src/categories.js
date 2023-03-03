import axios from 'axios'
import { API_KEY } from "./apiKey";

/*
Categories function
Return: list of Gif categories
*/
export const fetchCategoryGIFs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/categories'
    const params = { api_key: API_KEY }

    const { data: gifData } = await axios.get(url, { params })

    return gifData.data
}
