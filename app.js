const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".menu")
const closebtn = document.querySelector(".close")

hamburger.addEventListener("click", ()=>{
    navlist.classList.add("open");
    closebtn.style.display = "block";
    hamburger.style.visibilty = "hidden"
})
closebtn.addEventListener("click", ()=>{
    navlist.classList.remove("open");
    closebtn.style.display = "none";
    hamburger.style.visibilty = "visible"
})