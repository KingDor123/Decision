const btn2=document.querySelector(".button2");
const btn3=document.querySelector(".button3");
const btn4=document.querySelector(".button4");

const roll = document.querySelector(".go")
const ans = document.querySelector(".answer")
const clear = document.querySelector(".clear")
const anime = document.querySelector(".animetion")
const preAnswer = document.querySelector(".preAnswer")

//input
const in1 = document.getElementById("in1")
const in2 = document.getElementById("in2")
const in3 = document.getElementById("in3")
const in4 = document.getElementById("in4")


const i1 = document.querySelector(".i1")
const i2 = document.querySelector(".i2")
const i3 = document.querySelector(".i3")
const i4 = document.querySelector(".i4")

let number
let text
    i1.style.display ="none"
    i2.style.display ="none"
    i3.style.display ="none"
    i4.style.display ="none"

btn2.addEventListener("click",()=>{
    number=Math.floor(Math.random() * 2)+1;
    anime.classList.remove("animetion")
    preAnswer.innerHTML= " Your answer is: "
    i1.style.display ="block"
    i2.style.display ="block"
    i3.style.display ="none"
    i4.style.display ="none"

})
btn3.addEventListener("click",()=>{
     number=Math.floor(Math.random() * 3)+1;
    anime.classList.remove("animetion")
    preAnswer.innerHTML= " Your answer is: "
    i1.style.display ="block"
    i2.style.display ="block"
    i3.style.display ="block"
    i4.style.display ="none"
})
btn4.addEventListener("click",()=>{
    number=Math.floor(Math.random() * 4)+1;
    console.log(number);
    anime.classList.remove("animetion")
    preAnswer.innerHTML= " Your answer is: "
    i1.style.display ="block"
    i2.style.display ="block"
    i3.style.display ="block"
    i4.style.display ="block"
    
})
roll.addEventListener("click" ,()=>{
    if(number===1){
        text = in1.value;
        ans.innerText=text
        number=Math.floor(Math.random() * 2)+1;
    }else if(number===2){
        text = in2.value;
        ans.innerHTML= text

    }else if(number===3){
        text = in3.value;
        ans.innerHTML= text
        number=Math.floor(Math.random() * 3)+1;
    }else{
        text = in4.value;
        ans.innerHTML= text
        number=Math.floor(Math.random() * 4)+1;
    }
    document.getElementById('in1').value = '' 
    document.getElementById('in2').value = ''
    document.getElementById('in3').value = ''
    document.getElementById('in4').value = '' 
    i1.style.display ="none"
    i2.style.display ="none"
    i3.style.display ="none"
    i4.style.display ="none"
})
clear.addEventListener("click",()=>{
    console.log();
    ans.innerHTML = " "
    anime.classList.add("animetion")
    preAnswer.innerHTML = " "
    
    i1.style.display ="none"
    i2.style.display ="none"
    i3.style.display ="none"
    i4.style.display ="none"
    document.getElementById('in1').value = '' 
    document.getElementById('in2').value = ''
    document.getElementById('in3').value = ''
    document.getElementById('in4').value = '' 
    })