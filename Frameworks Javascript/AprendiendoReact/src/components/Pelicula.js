import React, { Component } from 'react';

class Pelicula extends Component {
    marcar=()=>{
        this.props.marcarFavorita(this.props.pelicula);
    }
    render() {
        
        const {titulo,image}=this.props.pelicula;
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>
                <button onClick={this.marcar}>Marcar como favorita</button>
                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 min
                </span>
                <a href='/'>Leer más</a>
                <div className="clearfix"></div>
            </article>

        );
    }
}

export default Pelicula;