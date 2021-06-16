import { Component } from '@angular/core';
@Component({//Decorador
    selector: 'mi-component',//Nombre de la etiqueta
    templateUrl: './mi-comp.component.html'//También podemos hacerlo con la propiedad 'template' y mediante las comillas -> `` meter el html ahí
})
export class MiComponente {
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor() {
        this.titulo = 'Componente';
        this.comentario = 'Comentario del componente';
        this.year = 2021;
        this.mostrarPeliculas = true;

        console.log('Componente cargado');
        console.log(this.titulo);

    }

    cambioPeliculas() {
        if (this.mostrarPeliculas) {
            this.mostrarPeliculas = false;
        }else{
            this.mostrarPeliculas = true;
        }

    }
}