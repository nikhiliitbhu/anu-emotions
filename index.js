function myFunc(){
    var bulbStatus = document.getElementById("bulb").src;
    if(bulbStatus.includes('on')){
        document.getElementById("bulb").src='images/pic_bulboff.gif';
    } else {
        document.getElementById("bulb").src='images/pic_bulbon.gif';
    }

}