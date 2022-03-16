var isplaying=false;
function playorpause(clicked_id){
    var audio = new Audio('sounds/'+clicked_id+'.mp3');

    if(isplaying==false){
        audio.play();
        isplaying=true;
    }
    else if(isplaying==true){
        audio.pause();
        isplaying=false;
    }
}