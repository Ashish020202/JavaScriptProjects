document.addEventListener('DOMContentLoaded', function() {

const api = "https://api.quotable.io/random";
const quoteDisplay= document.getElementById('quoteid')
const quoteInputVal = document.getElementById('quote-input')
const timeElement = document.getElementById('timerid')
let timerRunning = false;

quoteInputVal.addEventListener('input',()=>{
  if (!timerRunning) {
    startTimer();
    timerRunning = true;
  }
  const singleQuoteElement = quoteDisplay.querySelectorAll('span');
  const singleInputQuote = quoteInputVal.value.split('');
   
  let correct = true;

  singleQuoteElement.forEach((charSpan,index)=>{
    const character = singleInputQuote[index];
    if(character==null){
      charSpan.classList.remove('correct')
      charSpan.classList.remove('incorrect')
      correct=false
    }
    else if(character===charSpan.innerText){
      charSpan.classList.add('correct')
      charSpan.classList.remove('incorrect')
    } else{
      charSpan.classList.remove('correct')
      charSpan.classList.add('incorrect')
      correct=false
    }
  })
  if(correct) displayQuote();
})

function randomquote(){
   return fetch(api)
     .then(response=>response.json())
     .then(data=>data.content);
}

async function displayQuote(){
    const quote= await randomquote();
    // console.log(displyingquote);
    quoteDisplay.innerHTML= " ";
    quote.split('').forEach(char=>{
      const charSpan = document.createElement('span');
      charSpan.innerText=char;
      // charSpan.classList.add('correct');
      // charSpan.classList.add('incorrect');
      quoteDisplay.appendChild(charSpan);
  
    })
    quoteInputVal.value=null;
    // startTimer();
}

let startTime
function startTimer(){
  timeElement.innerText=0;
  startTime=new Date();
  setInterval(()=>{
     timerid.innerText= getTimerTime()
  },1000)
}
function getTimerTime(){
  return Math.floor((new Date()-startTime)/1000)
}

displayQuote();
});