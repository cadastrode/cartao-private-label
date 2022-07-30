let time=10000,
currientImageIndex= 0,
images = document.querySelectorAll("#slider img")
max=images.length;



function proximaImagem(){
    
    images[currientImageIndex].classList.remove("select")

    currientImageIndex++

   
   
    if(currientImageIndex>=max){
    currientImageIndex=0;
}
images[currientImageIndex].classList.add("select")
}
function mudaCor(){
    if(currientImageIndex==0){
        var cor=document.getElementById("sla").style.backgroundColor="#002A54"
    }else if(currientImageIndex==1){
        var cor=document.getElementById("sla").style.backgroundColor="#fff"
    }else if(currientImageIndex==2){
        var cor=document.getElementById("sla").style.backgroundColor="#C5D932"
    }else if(currientImageIndex==3){
        var cor=document.getElementById("sla").style.backgroundColor="#2C74A6"
    }else if(currientImageIndex==4){
        var cor=document.getElementById("sla").style.backgroundColor="#F2B90F"
    }else if(currientImageIndex==5){
        var cor=document.getElementById("sla").style.backgroundColor="#fff"
    }else if(currientImageIndex==6){
        var cor=document.getElementById("sla").style.backgroundColor="#498E33"
    }else if(currientImageIndex==7){
        var cor=document.getElementById("sla").style.backgroundColor="#0F85B5"
    }else if(currientImageIndex==8){
        var cor=document.getElementById("sla").style.backgroundColor="#C0D72F"
    }else if(currientImageIndex==9){
        var cor=document.getElementById("sla").style.backgroundColor="#00265D"
    }else if(currientImageIndex==10){
        var cor=document.getElementById("sla").style.backgroundColor="#D5DE37"
    }
    
}

function iniciar(){
   setInterval(() => {
    proximaImagem()
    mudaCor()
   }, time);
}
window.addEventListener("load",iniciar)