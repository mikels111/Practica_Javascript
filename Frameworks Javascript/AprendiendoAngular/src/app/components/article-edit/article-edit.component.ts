import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from "../../services/global";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public is_edit: boolean;
  public page_title: string;
  public status: string;
  public url: string;


  constructor(private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {

    this.article = new Article("", "", "", "", "");
    this.status = "";
    this.is_edit = true;
    this.page_title = 'Crear artículo';
    this.url = Global.url;
  }

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + '/upload-img'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Subir imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.articleUpdated;
          Swal.fire({
            icon: 'success',
            title: 'Articulo Guardado',
            toast:true,
            position:'bottom-end',
            showConfirmButton:false,
            timer:1500
          });
          this._router.navigate(['/blog/articulo/',this.article._id]);

        } else {
          this.status = 'Error';
        }
      },
      error => {
        this.status = "Error: " + error;
        Swal.fire({
          title: 'El articulo no se ha guardado correctamente 😲',
          icon: 'success',
          confirmButtonText: 'Continuar'
        });
      });

  }
  imageUpload(event: any) {
    this.article.image = event.body.image
  }

  getArticle() {
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
}
