function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || []
    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function(){
    //Control de lo que se pasa en la funcion
    const player={
        play:() => this.play(),
        pause:() => this.pause(),
        media: this.media,
        //Propiedad Virtual
        get muted(){
            return this.media.muted;
        },
        set muted(value){
           this.media.muted = value;
        }
    }

    //player.muted();

    this.plugins.forEach(plugin =>{
        plugin.run(this) //Pasar Atributos al Plugins
    })
}

MediaPlayer.prototype.play = function(){
    this.media.play()
}
MediaPlayer.prototype.pause = function(){
    this.media.pause()
}
MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play()
    }else{
        this.pause()
    }
}
MediaPlayer.prototype.mute = function(){
    this.media.muted = true
}
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false
}

MediaPlayer.prototype.toggleMute = function(){
    if(this.media.muted = false){
        console.log("Mute");
        this.mute()
    }else{
        this.unmute()
    }
}
//Module 
export default MediaPlayer