/*
Search function 
Input:  query - value from search bar
        limit - number of gifs to return
        offset(optional) - starting position/index of the result
Return: GIFs of search results
*/
export const fetchSearchGIFs = async (q, limit = 1, offset = 0) => {
    const url = 'https://api.giphy.com/v1/gifs/search'
    const params = {
      api_key: APIKEY,
      q,
      limit,
      offset
    }
  
    const { data: gifData } = await axios.get(url, { params })
  
    return gifData.data
}