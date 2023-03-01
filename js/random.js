 
let randomList = []             //List to store random gifs 

/*
Random function 
Input:  limit - number of gifs to return
Store randomList with GIFs of random results
*/
async function randomGIF(limit = 1) {
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`
    
    for(let i = 0; i < limit; i++) {
        const gifData = await callAPI("GET", url)
        randomList.push(gifData.data)
    }

    //Sample
    console.log(randomList)                         // Show list of GIF
    console.log(randomList[0].title)                // to get title 
    console.log(randomList[0].images.downsized.url) // to get images src
}

// randomGIF(2)