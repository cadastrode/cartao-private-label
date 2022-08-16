var imgs=[];
var cel;
var imgAtual;
var maxImg;
var tmp;


function precarregamento(){
    var r=1;
    for(var i=0;i<11;i++){
    imgs[i]=new Image();
    imgs[i].src="img/r"+r+".jpg";
    r++;
    }
   
}
function carregar(img){
    cel.style.backgroundImage="url('"+imgs[img].src+"')"
    
}

 function troca(dir){
    
    imgAtual+=dir;
    if(imgAtual>maxImg){
        imgAtual=0;   
    }else if(imgAtual<0){
        imgAtual=maxImg;   
    }
    carregar(imgAtual);
    }
   
    function inicia(){
        precarregamento();
        imgAtual=0;
        maxImg=imgs.length-1;
        cel=document.getElementById("slider");
        carregar(imgAtual);
       tmp=0;
       anima();
    
    }
    function anima(){
       tmp++
       if(tmp>=400){
        tmp=0;
        troca(1);
       }
       window.requestAnimationFrame(anima)
    }
    
    window.addEventListener("load",inicia);