import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('video')
const player = new MediaPlayer({
    el:video, 
    plugins:[new AutoPlay(), new AutoPause(), new Ads()] 
})
const botton:HTMLElement = document.getElementById('play')
const mute:HTMLElement = document.getElementById('mute')

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
