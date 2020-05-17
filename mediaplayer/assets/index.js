import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const player = new MediaPlayer({
    el:video, 
    plugins:[new AutoPlay(), new AutoPause()] 
})
const botton = document.getElementById('play')
const mute = document.getElementById('mute')

botton.onclick = () => player.togglePlay()
mute.onclick = () =>{
    if(player.media.muted){
        player.unmute();
    }else{
        player.mute()
    }
} 