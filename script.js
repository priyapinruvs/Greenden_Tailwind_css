// side nav bar
let  menuicon=document.getElementById("menuicon")
let sidenav=document.getElementById("Sidenavbar")
let close=document.getElementById("close")

menuicon.addEventListener("click", function()
{ 
    sidenav.style.right=0
})

close.addEventListener("click", function(){
    sidenav.style.right="-30%"
})
