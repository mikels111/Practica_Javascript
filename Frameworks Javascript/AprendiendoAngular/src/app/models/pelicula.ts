export class Pelicula {
    // public title: string;
    // public year: number;
    // public image: string;

    // constructor(year: number, title: string, image: string) {
    //     this.title = title;
    //     this.year = year;
    //     this.image = image;
    // }

    //Este constructor hace exactamente lo mismo que lo de arriba^
    constructor(
        public title: string,
        public image: string,
        public year: number
    ){}
}