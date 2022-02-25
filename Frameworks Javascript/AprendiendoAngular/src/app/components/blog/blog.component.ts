import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  public articles: Array<Article>
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.articles = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    // console.log(this._articleService.pruebas());
    
    this._articleService.getArticles().subscribe(
      response => {
        // console.log(response);
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error => {
        console.log("Error "+error.message);

      }
    );//subscribe es un método de la clase Obsevable que permite recoger los datos de la petición http

  }

}
