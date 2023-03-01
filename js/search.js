 
let searchList = []             //List to store search gifs 

/*
Search function 
Input:  query - value from search bar
        limit - number of gifs to return
        offset(optional) - starting position/index of the result
Store searchList with GIFs of search results
*/
async function searchGIF(query, limit = 1, offset = 0) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}&limit=${limit}&offset=${offset}`
    const gifData = await callAPI("GET", url)

    for(const gif of gifData.data) {
        searchList.push(gif)
    }

    //Sample
    console.log(searchList)                         // Show list of GIF
    console.log(searchList[0].title)                // to get title 
    console.log(searchList[0].images.downsized.url) // to get images src

}

// searchGIF('pokemon', 2)