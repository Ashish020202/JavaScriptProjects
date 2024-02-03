document.addEventListener('DOMContentLoaded', function() {

const api = "https://api.quotable.io/random";
const quoteDisplay= document.getElementById('quoteid')
function randomquote(){
   return fetch(api)
     .then(response=>response.json())
     .then(data=>data.content);
}

async function displayQuote(){
    const quote= await randomquote();
    // console.log(displyingquote);
    quoteDisplay.innerText=quote;
}

displayQuote();
});