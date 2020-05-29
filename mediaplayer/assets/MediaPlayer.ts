class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container:HTMLElement;

    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
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