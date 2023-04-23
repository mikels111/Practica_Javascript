import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
// import axios from 'axios';
class Home extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Slider
                    title="Bienvenido a la web de React"
                    btn='Ir al blog'
                    size='slider-big'
                />
                <div className="center">
                    <div id='content'>

                    </div>
                    <Sidebar />
                </div>
            </React.Fragment >

        );
    }
}

export default Home;