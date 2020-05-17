class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    //Pasar saber si el usuario esta visualizando la pagina 
    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

 handleIntersection(entries) {
    const entry = entries[0];

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
