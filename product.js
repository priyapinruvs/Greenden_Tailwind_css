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

//search container

let productcontainer= document.getElementById("product-container")
let search = document.getElementById("search")
let productlist= productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
 let enteredvalue= event.target.value.toUpperCase()

 for(count =0; count<productlist.length; count=count+1)
 {

    let productname =productlist[count].querySelector("h2").textContent
    if (productname.toUpperCase().indexOf(enteredvalue)<0)
        {
      productlist[count].style.display="none"
    }
else{
    productlist[count].style.display="block"
}

}

})