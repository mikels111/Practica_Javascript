import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public title: string;
  public articles: Array<Article>;
  constructor(private route: ActivatedRoute, private router: Router, private _articleService: ArticleService) {
    this.title = 'Últimos Articulos';
    this.articles = [];
  }

  ngOnInit(): void {
    try {
      this.route.snapshot.url[0].path;
    } catch (error) {
      if (error.message.includes("'path' of undefined")) {
        this.router.navigate(['/home']);
      }
    }

    this._articleService.getArticles(true).subscribe(
      response => {
        // console.log(response);
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error => {
        console.log(error);

      }
    );
  }

}
