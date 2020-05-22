import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.ts'

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
//Verificar si el navegador usa Service Worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./../sw.js').catch(error=>{
        console.log(error.message)
    })
}
