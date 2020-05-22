class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlugins()
    }
    private initPlugins() {
        //Control de lo que se pasa en la funcion
        this.plugins.forEach(plugin => {
            plugin.run(this) //Pasar Atributos al Plugins
        })
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    togglePlay() {
        if (this.media.paused) {
            this.play()
        }
        else {
            this.pause()
        }
    }
    mute() {
        this.media.muted = true
    }
    unmute() {
        this.media.muted = false
    }
    toggleMute() {
        if (this.media.muted = false) {
            console.log("Mute")
            this.mute()
        }
        else {
            this.unmute()
        }
    }
}



//Module 
export default MediaPlayer