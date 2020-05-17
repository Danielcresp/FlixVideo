function AutoPlay(){}
AutoPlay.prototype.run = function(player){
    //player.mute()
    //player.play() // Error solo puede ser iniciado por un gesto del usuario
    if (!player.muted) {
        player.muted = true;
      }
      player.play();
}

export default AutoPlay