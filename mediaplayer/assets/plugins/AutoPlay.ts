import MediaPlayer from '../MediaPlayer'

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    //player.mute()
    //player.play() // Error solo puede ser iniciado por un gesto del usuario
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay