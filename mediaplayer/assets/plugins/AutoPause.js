class AutoPause {
  constructor() {
    this.threshold = 0.25; //El porcentage de intersection
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) { //Recibe el Player
    this.player = player;
    //Observar la intercepsion 
    const observer = new IntersectionObserver(this.handleIntersection, {
    //threshold: this.threshold: Que % del elemento tiene con todo el contenedor
      threshold: this.threshold,
    });

    //Pasar saber si el usuario esta visualizando la pagina 
    observer.observe(this.player.media);//Media es toda la pantalla
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

 handleIntersection(entries) {//entries son todos los objetos que estamos observando
    const entry = entries[0]; //En este caso solo hay uno
    console.log(entry)

    //Determinar la intersection 
    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
//usuario esta visualizando la pagina 
    handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
