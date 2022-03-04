import React, { Component } from 'react';
import Sidebar from './Sidebar';
class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    mujerRef = React.createRef();
    hombreRef = React.createRef();
    otroRef = React.createRef();

    state = {
        user: {

        }
    }

    recibirFormulario = (e) => {
        e.preventDefault();
        var genero = 'otro';
        //Operación condicional ternaria múltiple
        genero = this.hombreRef.current.checked ? this.hombreRef.current.value
            : this.mujerRef.current.checked ? this.mujerRef.current.value
                : this.otroRef.current.value;

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }
        this.setState({
            user: user
        });
        console.log(user);
        // console.log(user.nombre + " " + user.apellidos + " " + user.bio + " " + genero);
    }
    render() {
        if (this.state.user) {
            var user = this.state.user;
        }
        return (
            <React.Fragment>
                {this.state.user.nombre &&
                    <React.Fragment>
                        <p>Nombre: {user.nombre}</p>
                        <p>Apellidos: {user.apellidos}</p>
                        <p>Bio: {user.bio}</p>
                        <p>Genero: {user.genero}</p>
                    </React.Fragment>
                }
                <div className="center">
                    <div id='content'>
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" cols="30" rows="10" ref={this.bioRef}></textarea>
                            </div>
 
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="mujer" ref={this.mujerRef} checked={user.genero==='mujer' && true}/> Mujer
                                <input type="radio" name="genero" value="hombre" ref={this.hombreRef}  checked={user.genero==='hombre' && true}/> Hombre
                                <input type="radio" name="genero" value="otro" ref={this.otroRef}  checked={user.genero==='otro' && true}/> Otro
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Enviar" className="btn btn-success"></input>
                        </form>
                    </div>
                    <Sidebar
                        blog='false'
                    />

                </div>
            </React.Fragment >

        );
    }
}

export default Formulario;