import { Injectable } from '@angular/core';//permite aplicar un decorador a la clase y al momento de utilizar un servicio no tener que crear un objeto del servicio
import { Pelicula } from '../models/pelicula';
@Injectable()
export class PeliculaService {
    public peliculas: Array<Pelicula>;
    constructor() {
        this.peliculas = [
            new Pelicula('La ventana indiscreta', 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Rear_Window_film_poster.png', 1954),
            new Pelicula('La grande belleza', 'https://a.ltrbxd.com/resized/film-poster/1/3/0/5/2/3/130523-the-great-beauty-0-460-0-690-crop.jpg?k=916dca4736', 2013),
            new Pelicula('Barton Fink', 'https://a.ltrbxd.com/resized/film-poster/5/1/7/6/9/51769-barton-fink-0-460-0-690-crop.jpg?k=44235370d9', 1991),
            new Pelicula('Mulholland Drive', 'https://a.ltrbxd.com/resized/sm/upload/kv/7n/p8/tv/fMC8JBWx2VjsJ53JopAcFjqmlYv-0-460-0-690-crop.jpg?k=31d71092d8', 2001)
        ];
    }
    holamundo() {
        return 'Hola mundo desde un servicio desde Angular';
    }
    getPeliculas() {
        return this.peliculas;
    }
}