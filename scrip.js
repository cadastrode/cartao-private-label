let time=10000,
currientImageIndex= 0,
images = document.querySelectorAll("#slider img")
max=images.length;

function mudaCor(){
    
}

function proximaImagem(){
    
    images[currientImageIndex].classList.remove("select")

    currientImageIndex++

   
   
    if(currientImageIndex>=max){
    currientImageIndex=0;
}
images[currientImageIndex].classList.add("select")
}

function iniciar(){
   setInterval(() => {
    proximaImagem()
   }, time);
}
window.addEventListener("load",iniciar)