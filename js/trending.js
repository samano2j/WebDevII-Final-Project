 
let trendingList = []             //List to store trending gifs 

/*
Trending function 
Input:  limit - number of gifs to return
        offset(optional) - starting position/index of the result
Store trendingList with GIFs of trending results
*/
async function trendingGIF(limit = 1, offset = 0) {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=${limit}&offset=${offset}`
    const gifData = await callAPI("GET", url)

    for(const gif of gifData.data) {
        trendingList.push(gif)
    }

    //Sample
    console.log(trendingList)                         // Show list of GIF
    console.log(trendingList[0].title)                // to get title 
    console.log(trendingList[0].images.downsized.url) // to get images src
}

// trendingGIF(2)