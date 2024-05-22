let box=document.querySelector("div")
let input=document.querySelector(".inputs")
let inputss=document.querySelector(".inputss")


input.addEventListener("input",()=>{
    box.style.borderRadius=input.value
    
})
inputss.addEventListener("input",()=>{
    box.style.background=inputss.value
})