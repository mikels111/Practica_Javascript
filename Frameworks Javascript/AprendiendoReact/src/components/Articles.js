import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {
    state = {
        articles: {},
        status: null
    }
    componentDidMount() {
        this.getArticles();
    }
    getArticles = () => {
        axios.get("http://localhost:3900/api/articles").then(
            res => {
                this.setState(
                    {
                        articles: res.data.articles,
                        status: res.data.status
                    }
                );
            }
        );
    }
    render() {

        if (this.state.status === 'success') {

            if (this.state.articles.length > 0) {
                return (
                    <ul>
                        {
                            this.state.articles.map((article) => {
                                return (

                                    <div id="articles">
                                        <article class="article-item" id="article-template">
                                            <div class="image-wrap">
                                                <img src="https://www.tor.com/wp-content/uploads/2016/08/WoK-wallpaper-2560x1600.jpg" alt="paisaje"></img>
                                            </div>
                                            <h2>{article.title}</h2>
                                            <span class="date">
                                                {article.date}
                                            </span>
                                            <a href="#">Leer más</a>
                                            <div class="clearfix"></div>
                                        </article>


                                    </div>
                                )
                            })
                        }
                    </ul>
                );
            } else {
                return (
                    <h3>No hay articulos</h3>
                );
            }

        } else {
            return (
                <h1>
                    Cargado
                </h1>
            );
        }


    }
}

export default Articles;