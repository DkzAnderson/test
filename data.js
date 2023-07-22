const h1 = document.querySelector('h1');
const input = document.querySelector('input')
const ancla = document.querySelector('a')
let txt = "" 

function saveTxt(){
    txt = input.value;
    localStorage.setItem("key",txt);

}

function setTxt(){    
    txt = localStorage.getItem("key")
    console.log(txt)
    h1.innerText = txt

}
