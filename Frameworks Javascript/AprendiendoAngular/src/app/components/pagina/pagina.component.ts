import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public nombre: string;
  public apellidos: string;
  constructor(private _route: ActivatedRoute,
    private _router: Router) {
    this.nombre = "";
    this.apellidos = "";
  }

  ngOnInit(): void {
    //Recoger parametros de la url
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
    console.log(this._route.snapshot.url[0].path);


  }
  redireccion() {
    this._router.navigate(['/pagina-de-pruebas', 'Mikel', 'Seara']);//Redirección
  }

}
