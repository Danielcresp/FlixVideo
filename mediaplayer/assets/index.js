import MediaPlayer from "./MediaPlayer.js"

const video = document.querySelector('video')
const botton = document.querySelector('button')
const player = new MediaPlayer({el:video})

botton.onclick = () => player.togglePlay()