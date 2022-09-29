var imgs=[];
var slid;
var imgAtual;
var maxImg;
var tmp;
function clicMenu(){
    if(itens.style.display== 'none'){
        itens.style.display = 'block'
    } else{
        itens.style.display= 'none'
    }
}

function precarregamento(){
    var s=1;
    for(var i=0;i<11;i++){
    imgs[i]=new Image();
    imgs[i].src="img/s"+s+".jpg";
    s++;
    }
   
}
function carregar(img){
    slid.style.backgroundImage="url('"+imgs[img].src+"')"
    
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
        slid=document.getElementById("dvslider");
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