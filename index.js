var sidenav=document.getElementById("sidenav")
var menunav=document.getElementById("menunav")
var closenav=document.getElementById("closenav")
menunav.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
     sidenav.style.right="-50%"
})