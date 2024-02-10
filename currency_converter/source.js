const cur1=document.getElementById("currency-one")
const cur2=document.getElementById("currency-two")

const rate1 = document.getElementById("rateid")

const swap = document.getElementById('btnid')

const amt1 = document.getElementById('amount1')
const amt2 = document.getElementById('amount2')

function calculate(){
    const firstcurr = cur1.value;
    const seccurr = cur2.value; 
    fetch(`https://v6.exchangerate-api.com/v6/82915b4fce4166e111768cbd/latest/${firstcurr}`)
       .then(res=>res.json())
       .then(data=>{
        // console.log(data);
        const frate = data.conversion_rates[seccurr];
        rate1.innerText=`1 ${firstcurr} = ${frate} ${seccurr}`
        amt2.value=(amt1.value*frate).toFixed(2)
       })
}

cur1.addEventListener('change' , calculate)
cur2.addEventListener('change', calculate)

amt1.addEventListener('input',calculate)
amt2.addEventListener('input',calculate)

swap.addEventListener('click', ()=>{
   const temp = cur1.value;
   cur1.value=cur2.value;
   cur2.value = temp;
   
   calculate();
})

calculate();