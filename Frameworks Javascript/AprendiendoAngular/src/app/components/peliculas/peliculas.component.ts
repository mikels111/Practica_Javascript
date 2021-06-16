import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck {
  public titulo: string;
  public peliculas: Array<any>;


  constructor() {
    this.titulo = 'Componente peliculas';
    this.peliculas=[
      {year:2013,title:'La grande belleza',image:'https://a.ltrbxd.com/resized/film-poster/1/3/0/5/2/3/130523-the-great-beauty-0-460-0-690-crop.jpg?k=916dca4736'},
      {year:1991,title:'Barton Fink',image:'https://a.ltrbxd.com/resized/film-poster/5/1/7/6/9/51769-barton-fink-0-460-0-690-crop.jpg?k=44235370d9'},
      {year:2001,title:'Mulholland Drive',image:'https://a.ltrbxd.com/resized/sm/upload/kv/7n/p8/tv/fMC8JBWx2VjsJ53JopAcFjqmlYv-0-460-0-690-crop.jpg?k=31d71092d8'}
    ];
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    
    console.log('COMPONENTE LANZADO');
  }

  ngDoCheck() {
    console.log('DOCHECK');

  }
  cambiarTitulo(){
    this.titulo='Título cambiado';
  }

  ngOnDestroy(){
    console.log('El componente se va a eliminar');
  }


}
