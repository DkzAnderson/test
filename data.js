const h1 = document.querySelector('h1');
const input = document.querySelector('input')
const ancla = document.querySelector('a')
let txt = "" 
let key = "key"

function saveTxt(){
    txt = input.value;
    localStorage.setItem(`${key}`,txt);

}

function setTxt(){    
    txt = localStorage.getItem(`${key}`)
    h1.innerText = txt
    h1.style.color = "blue"
    localStorage.removeItem(`${key}`)

}
