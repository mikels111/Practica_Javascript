import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article: Article;
  public url: string;
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article("", "", "", "", null);
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }

        },
        error => {
          console.error('Error: ' + error.message);
          this._router.navigate(['/home']);
        }
      );
    });
  }
  delete(id: string) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "No se recuperarán los datos!",
      icon: 'warning',
      width:'20rem',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          response => {
            if (response.status == 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Articulo borrado',
                toast:true,
                position:'bottom-end',
                showConfirmButton:false,
                timer:1500
              });
            }else{
              Swal.fire({
                icon: 'error',
                title: 'El articulo no ha sido borrado',
                toast:true,
                showConfirmButton:false,
                timer:1500
              });
            }
            this._router.navigate(['/blog']);
          },
          error => {
            console.log("Error " + error.message);
            this._router.navigate(['/blog']);
          }
        );
      }
    })


  }

}
