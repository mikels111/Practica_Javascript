import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//"HttpClient" --> libreria para hacer peticiones http
import { Observable } from 'rxjs'//Para recoger los datos que nos devuelve la API
import { Article } from '../models/article';
import { Global } from './global';
//Hay que importar 'HttpClientModule' en 'app.module.ts' para las peticiones Ajax

@Injectable()
export class ArticleService {
    public url: string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    pruebas() {
        return 'Soy el servicio de articulos';
    }
    getArticles(last: any = null): Observable<any> {
        var articles = '/articles';
        if (last != null) {
            var articles = '/articles/true';
        }
        return this._http.get(this.url + articles);
    }

    getArticle(articleId: string): Observable<any> {
        return this._http.get(this.url + '/article/' + articleId);
    }
    search(searchString: String): Observable<any> {
        return this._http.get(this.url + '/search/' + searchString);
    }
    create(article: Article): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/save', params, { headers: headers });
    }
    update(id: string, article: Article): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + "/update/" + id, params, { headers: headers });
    }

    delete(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + "/delete/" + id,{ headers: headers });
    }

}