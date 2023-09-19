const btn2=document.querySelector(".button2");
const btn3=document.querySelector(".button3");
const btn4=document.querySelector(".button4");
const ans = document.querySelector(".answer")
const clear = document.querySelector(".clear")
const tempclass = document.querySelector(".animetion")

btn2.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 2)+1;
    console.log(number);
    ans.innerHTML=number;
    tempclass.classList.remove("animetion")
})
btn3.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 3)+1;
    console.log(number);
    ans.innerHTML=number;
    tempclass.classList.remove("animetion")
})
btn4.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 4)+1;
    console.log(number);
    ans.innerHTML=number;
    tempclass.classList.remove("animetion")
})
clear.addEventListener("click",()=>{
    console.log();
    ans.innerHTML = " "
    tempclass.classList.add("animetion")
    
})
