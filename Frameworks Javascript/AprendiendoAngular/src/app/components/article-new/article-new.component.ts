import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';

import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from "../../services/global";
@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public url: string;
  public is_edit: boolean;
  //Modulo de subir archivos 'angular-file-uploader'


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
  }
  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

          Swal.fire({
            title: 'Se ha guardado el articulo 👌',
            icon: 'success',
            confirmButtonText: 'Continuar'
          });

          console.log(response.article);
          this._router.navigate(['/blog']);

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


}
