import React, { Component } from "react";
import MiComponente from './MiComponente';
class SeccionPruebas extends Component {
    contador = 0;
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contador: 0
    //     };
    // }

    // Se puede hacer con el constructor como arriba pero así es más corto
    state = {
        contador: 0
    };

    Hola_mundo(nombre) {
        var presentacion = (<div>
            <h2>Hola mundo me llamo {nombre}</h2>
        </div>)
        return presentacion;
    }

    sumar = () => {
        //this.contador=this.contador+1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar = () => {
        // this.contador = this.contador - 1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    render() {
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <section className="componentes">{/* className es class de css */}
                    {this.Hola_mundo('Mikel')}
                    <MiComponente />{/* Así se carga un componente */}
                </section>
                <p>{this.state.contador}</p>
                <input type='button' value='Sumar' onClick={this.sumar}></input>
                <input type='button' value='Restar' onClick={this.restar}></input>
            </section>
        );
    }
}

export default SeccionPruebas;