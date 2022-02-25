import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';
class Peliculas extends Component {
    state = {};
    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[1].titulo = "El Gran Hotel Budapest";
        this.setState({ peliculas: peliculas });
    }
    favorita = (event) => {
        this.setState({ favorita: event.titulo })
    }
    componentWillMount() {
        this.setState(
            {
                peliculas: [
                    { titulo: 'Dune', image: 'https://a.ltrbxd.com/resized/film-poster/3/7/1/3/7/8/371378-dune-0-230-0-345-crop.jpg?k=bee00ad6ac' },
                    { titulo: 'The Grand Budapest Hotel', image: 'https://a.ltrbxd.com/resized/film-poster/9/5/1/1/3/95113-the-grand-budapest-hotel-0-230-0-345-crop.jpg?k=21b617b234' }
                ],
                nombre: 'Mikel Seara',
                favorita: null
            }
        )
    }
    componentDidMount() {
        // alert('Lo que hace cuando está todo cargado')
    }
    componentWillUnmount() {
        // alert('Lo que hace cuando se quita de la ejecución el componente')
    }
    render() {
        var favStyle = {
            background: 'green'
        }
        return (
            <React.Fragment>
                <Slider
                    title="Peliculas"
                    size='slider-small'
                />
                <div className="center">
                    <section id="content">
                        <h2 className="subheader">Películas</h2>
                        {this.state.favorita ? (
                            <div style={favStyle}>
                                <h2>Gracias, pelicula favorita: {this.state.favorita} 👌</h2>
                            </div>
                        ) : (
                            <div style={{ background: 'red' }}>
                                <h2>No hay pelicula favorita</h2>
                            </div>

                        )
                        }
                        <button onClick={this.cambiarTitulo}>Cambiar título pelicula</button>
                        <div id="articles">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (<Pelicula key={i} pelicula={pelicula} marcarFavorita={this.favorita} />);
                                })
                            }
                        </div>
                    </section>
                    <Sidebar
                        blog='false'
                    />
                </div>
            </React.Fragment >
        );
    }
}

export default Peliculas;

