const btn2=document.querySelector(".button2");
const btn3=document.querySelector(".button3");
const btn4=document.querySelector(".button4");
const ans = document.querySelector(".answer")
const clear = document.querySelector(".clear")
btn2.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 2)+1;
    console.log(number);
    ans.innerHTML=number;
})
btn3.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 3)+1;
    console.log(number);
    ans.innerHTML=number;
})
btn4.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 4)+1;
    console.log(number);
    ans.innerHTML=number;
})
clear.addEventListener("click",()=>{
    console.log();
    ans.innerHTML=" ";
})
