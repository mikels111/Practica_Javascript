import React, { Component } from "react";
import logo from "../assets/images/logo.svg"
import {NavLink} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/* Logo */}
                    <div id="logo">
                        <img className="app-logo" src={logo} alt="logo"/>
                        <span id="brand">
                        <strong>Curso</strong>React
                        </span>
                    </div>
                    {/* Menu navegación */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeclassname="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeclassname="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" activeclassname="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" activeclassname="active">Peliculas</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Limpiar flotados */}
                    <div className="clearfix"></div>
                </div>

            </header>
        );
    }

}

export default Header;
