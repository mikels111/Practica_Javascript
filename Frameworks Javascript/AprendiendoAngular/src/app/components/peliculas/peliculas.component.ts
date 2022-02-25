import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;


  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = 'Componente peliculas';
    this.favorita = new Pelicula('', '', 0);
    this.fecha = new Date(2021, 6, 25);
    this.peliculas = this._peliculaService.getPeliculas();//[//
    //   new Pelicula('La ventana indiscreta', 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Rear_Window_film_poster.png', 1954),
    //   new Pelicula('La grande belleza', 'https://a.ltrbxd.com/resized/film-poster/1/3/0/5/2/3/130523-the-great-beauty-0-460-0-690-crop.jpg?k=916dca4736', 2013),
    //   new Pelicula('Barton Fink', 'https://a.ltrbxd.com/resized/film-poster/5/1/7/6/9/51769-barton-fink-0-460-0-690-crop.jpg?k=44235370d9', 1991),
    //   new Pelicula('Mulholland Drive', 'https://a.ltrbxd.com/resized/sm/upload/kv/7n/p8/tv/fMC8JBWx2VjsJ53JopAcFjqmlYv-0-460-0-690-crop.jpg?k=31d71092d8', 2001)
    // ];
    // Ahora las películas están en 'pelicula.service.ts' en el directorio service
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log('COMPONENTE LANZADO');
    console.log(this._peliculaService.holamundo());
  }

  ngDoCheck() {
    console.log('DOCHECK');

  }
  cambiarTitulo() {
    this.titulo = 'Título cambiado';
  }

  ngOnDestroy() {
    console.log('El componente se va a eliminar');
  }
  mostrarFavorita(event: any) {
    this.favorita = event.pelicula;
  }


}
