const btn2=document.querySelector(".button2");
const btn3=document.querySelector(".button3");
const btn4=document.querySelector(".button4");
const ans = document.querySelector(".answer")
const clear = document.querySelector(".clear")
const anime = document.querySelector(".animetion")
const preAnswer = document.querySelector(".preAnswer")



btn2.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 2)+1;
    console.log(number);
    ans.innerHTML=number;
    anime.classList.remove("animetion")
    preAnswer.innerHTML= " Your answer is: "
})
btn3.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 3)+1;
    console.log(number);
    ans.innerHTML=number;
    anime.classList.remove("animetion")
    preAnswer.innerHTML= " Your answer is: "
})
btn4.addEventListener("click",()=>{
    let number=Math.floor(Math.random() * 4)+1;
    console.log(number);
    ans.innerHTML=number;
    anime.classList.remove("animetion")
    preAnswer.innerHTML= " Your answer is: "
})
clear.addEventListener("click",()=>{
    console.log();
    ans.innerHTML = " "
    anime.classList.add("animetion")
    preAnswer.innerHTML = " "
    
})
