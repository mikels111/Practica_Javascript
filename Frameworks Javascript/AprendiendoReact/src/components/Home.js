import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import axios from 'axios';
class Home extends Component {
    render() {

        axios.get("http://localhost:3900/api/articles")
            .then(res => {
                console.log(res.data);
            });
        return (
            <React.Fragment>
                <Slider
                    title="Bienvenido a la web de React"
                    btn='Ir al blog'
                    size='slider-big'
                />
                <div className="center">
                    <div id='content'>
                        <h1 className='subheader'>
                            Últimos articulos
                        </h1>
                    </div>
                    <Sidebar />
                </div>
            </React.Fragment >

        );
    }
}

export default Home;