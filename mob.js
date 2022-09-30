var mob=1;
document.getElementById("rad1").checked = true;

setInterval(function(){
    movel()
}, 5000)

function movel(){
    mob++;
    if (mob>11) {
        mob=1;
    }
    document.getElementById("rad"+mob).checked =true;
}
