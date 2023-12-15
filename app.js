let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let skills=document.getElementById("skills")
    let experience=document.getElementById("experience")
    let education=document.getElementById("education")

b1.addEventListener("click",()=>{
    b1.style.borderBottom="2px solid rgb(236, 63, 63)"
    b2.style.borderBottom="none"
    b3.style.borderBottom="none"
    skills.style.display="block"
    experience.style.display="none"
    education.style.display="none"
})
b2.addEventListener("click",()=>{
    b2.style.borderBottom="2px solid rgb(236, 63, 63)"
    b1.style.borderBottom="none"
    b3.style.borderBottom="none"
    skills.style.display="none"
    experience.style.display="block"
    education.style.display="none"
})
b3.addEventListener("click",()=>{
    b3.style.borderBottom="2px solid rgb(236, 63, 63)"
    b1.style.borderBottom="none"
    b2.style.borderBottom="none"
    skills.style.display="none"
    experience.style.display="none"
    education.style.display="block"
})