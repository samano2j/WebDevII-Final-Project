/*
Random function 
Input:  limit - number of gifs to return
Return: GIFs of random results
*/
export const fetchTrendingGIFs = async (limit = 1, offset = 0) => {
    const url = 'https://api.giphy.com/v1/gifs/random'
    const params = {
      api_key: APIKEY,
      limit,
      offset
    }
  
    const { data: gifData } = await axios.get(url, { params })
  
    return gifData.data
}