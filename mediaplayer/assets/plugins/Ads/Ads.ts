export interface Ad{
    imageUrl: string;
    title: string;
    body: string;
    url: string;
}

const ALL_ADS: Ad[] = [
    {
        imageUrl: 'https://developers.google.com/web/images/contributors/beaufortfrancois.jpg',
        title: 'Nuevos Cursos',
        body: 'Inicia ahora',
        url: 'google.com'
    },
    {
        imageUrl: 'https://developers.google.com/web/images/contributors/beaufortfrancois.jpg',
        title: 'Nuevos Cursos',
        body: 'Inicia ahora',
        url: 'google.com'
    }
]
class Ads{
    private static instance: Ads;
    private ads: Ad[];

    private constructor(){
        this.initAds();
    }

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads();
        }

        return Ads.instance;
    }
    private initAds(){
        this.ads = [...ALL_ADS]; //Hacer una copia de una arreglo en uiun arreglo nuevo
    }

    getAd(){
        if(this.ads.length === 0){
            this.initAds();
        }
       return this.ads.pop();
    }
}

export default Ads;