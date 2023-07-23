const buttonEl = document.querySelectorAll('.button');
const inputEl =  document.querySelector('#input-el');
const clickSound = new Audio('keypress1.wav');
buttonEl.forEach((btn) => {
    btn.addEventListener('click' , ()=>{
        clickSound.play();
        if(btn.textContent === 'C'){
            clear();
        }
        else if(btn.textContent === '='){
                calcuate(inputEl.value);
        }
        else{
            inputEl.value += btn.textContent
        }
    })
})

const calcuate = (para)=>{
    try{
        if(para===''){
            inputEl.value = ''
        }
        else{
            inputEl.value = eval(para);
        }
    }
    catch{
        inputEl.value = 'ERROR!'
        setTimeout(clear, 1000)
    }
}

const clear = ()=>{
    inputEl.value = "";   
}