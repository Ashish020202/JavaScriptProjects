const cur1=document.getElementById("currency1")
const cur2=document.getElementById("currency2")

const rate1 = document.getElementById("rateid")
const rate2 = document.getElementById("rateid2")

const amt1 = document.getElementById("amount1")
const amt2 = document.getElementById("amount2")

function calculate(){
    const firstcurr = cur1.value;
    const seccurr = cur2.value; 
    fetch(`https://v6.exchangerate-api.com/v6/82915b4fce4166e111768cbd/latest/${firstcurr}`)
       .then(res=>res.json)
       .then(data=>{
        console.log(data);
       })
}

cur1.addEventListener('change' , calculate)
cur2.addEventListener('change', calculate)

amt1.addEventListener('input',calculate)
amt2.addEventListener('input',calculate)