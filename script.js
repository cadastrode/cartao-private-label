var imgs=[];
var slid;
var imgAtual;
var maxImg;
var tmp;

function precarregamento(){
    
    imgs[0]=new Image();
    imgs[0].src="img/s1.jpg"
    imgs[1]=new Image();
    imgs[1].src="img/s2.jpg"
    imgs[2]=new Image();
    imgs[2].src="img/s3.jpg"
    imgs[3]=new Image();
    imgs[3].src="img/s4.jpg"
    imgs[4]=new Image();
    imgs[4].src="img/s5.jpg"
    imgs[5]=new Image();
    imgs[5].src="img/s6.jpg"
    imgs[6]=new Image();
    imgs[6].src="img/s7.jpg"
    imgs[7]=new Image();
    imgs[7].src="img/s8.jpg"
    imgs[8]=new Image();
    imgs[8].src="img/s9.jpg"
    imgs[9]=new Image();
    imgs[9].src="img/s10.jpg"
    imgs[10]=new Image();
    imgs[10].src="img/s11.jpg"
    
   
}
function carregar(img){
    slid.style.backgroundImage="url('"+imgs[img].src+"')"
}
function inicia(){
    precarregamento()
    imgAtual=0;
    maxImg=imgs.length-1;
    slid=document.getElementById("slider")
    carregar(imgAtual)
}
 function troca(){
    imgAtual++;
    if(imgAtual>maxImg){
        imgAtual=0;
        carregar(imgAtual)
    }
    }


window.addEventListener("load",inicia);