import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({el:video, plugins:[new AutoPlay()] })
const botton = document.getElementById('play')
const mute = document.getElementById('mute')

botton.onclick = () => player.togglePlay()
mute.onclick = () => player.toggleMute()