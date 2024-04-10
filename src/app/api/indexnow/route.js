import { NextResponse } from "next/server";

// Replace with your actual API key and URL
const apiKey = '11bf36c257104618b69465f71c342d6c';
let urlToSubmit = 'https://sh20raj.com/anishamalde/a-love-letter-to-gen-z-from-gen-y-understanding-reacts-evolution-4abm';




export async function GET(req,res){
    const url = new URL(req.url)

    let host = url.host || 'sh20raj.com';
    let keyLocation = url.origin + "/" + apiKey + ".txt" || 'https://sh20raj.com/11bf36c257104618b69465f71c342d6c.txt';
    urlToSubmit = url.searchParams.has("url") ? url.searchParams.get("url") : urlToSubmit;

     // Construct the API request payload
    const payload = {
        host: host,
        key: apiKey,
        keyLocation: keyLocation,
        urlList: [urlToSubmit],
    };

let indexit = async () => {
let msg = "__"
fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
})
    .then((response) => {
        if (response.ok) {
            console.log(`URL ${urlToSubmit} submitted successfully to IndexNow.`);
             msg = `URL ${urlToSubmit} submitted successfully to IndexNow.`;

            // return response.json()
        } else {
            console.error(`Error submitting URL ${urlToSubmit}. Status code: ${response.status}`);
            // return response.json(); // returning the response JSON for further examination
        }
    })
    .then((data) => {
        if (data) {
            console.error('Error response from server:', data);
        }
    })
    .catch((error) => {
        console.error('An error occurred:', error.message);
    });


}
// Make an HTTP POST request to the IndexNow API


    let result = {msg:"submitted",indexdata: await indexit(),host : host, apiKey: apiKey,keyLocation: keyLocation, url: urlToSubmit};
    // return Response.json()
    return  NextResponse.json(result, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });

}

