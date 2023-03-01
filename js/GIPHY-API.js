
let APIKEY = "SpY8MTNT4Sqal328m6taW42XtULScJZV"            //API Key to access GIPHY API

//Using Axios, to retrieve endpoints from API 
async function callAPI(method, url){
    const { data } = await axios(url, { method })
    return data
}
