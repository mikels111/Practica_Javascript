import './assets/css/App.css';
//Importar componentes
// import Header from './components/Header';
// import Slider from './components/Slider';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
import Router from './Router';
import React from 'react';
function App() {
    // var buttonString = 'Ir al blog';
    return (
        // classname para no confundir entre Js y CSS
        <div className="App" >
                <Router/>

                
        </div>
    );
}
export default App;