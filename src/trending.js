/*
Trending function 
Input:  limit - number of gifs to return
        offset(optional) - starting position/index of the result
Return: GIFs of trending results
*/
export const fetchTrendingGIFs = async (limit = 1, offset = 0) => {
    const url = 'https://api.giphy.com/v1/gifs/trending'
    const params = {
      api_key: APIKEY,
      limit,
      offset
    }
  
    const { data: gifData } = await axios.get(url, { params })
  
    return gifData.data
}