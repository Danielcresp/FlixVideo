class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }
    _initPlugins() {
        //Control de lo que se pasa en la funcion
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            //Propiedad Virtual
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }
        //player.muted();
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