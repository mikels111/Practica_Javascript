import React, { Component } from "react";
import { BrowserRouter, Routes, Route/*, useParams*/ } from 'react-router-dom';
import Peliculas from './components/Peliculas';
import Error from "./components/Error";
import Header from './components/Header';
import Blog from './components/Blog';
import Formulario from './components/Formulario';

import Footer from './components/Footer';
import Home from './components/Home';
class Router extends Component {
    render() {

        // function PruebaParametro() {
        //     let params = useParams();
        //     return (
        //         <React.Fragment>
        //             <section id="content">
        //                 <h1>hola mundo</h1>
        //                 {params.id && <div><h3>{params.id}</h3></div>}
        //                 {params.nombre && params.id && <div><h3>{params.nombre}</h3></div>}
        //             </section>
        //         </React.Fragment>
        //     );
        // }
        return (

            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route exact path="/formulario" element={<Formulario />} />
                    <Route exact path="/peliculas" element={<Peliculas />} />

                    {/* <Route exact path="/prueba2" element={<section id="content"><h1>hOla</h1><Peliculas /></section>} />
                    <Route path="/prueba3" element={<PruebaParametro />}>
                        <Route path=":id" element={<PruebaParametro />} />
                        <Route path=":id/:nombre" element={<PruebaParametro />} />
                    </Route> */}

                    <Route exact path="*" element={<Error />} />
                </Routes>

                <div className="clearfix"></div>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;