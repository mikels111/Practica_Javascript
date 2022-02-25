import React, {Component} from 'react';
class MiComponente extends Component {
    render(){

        let receta={
            nombre:'Pizza',
            ingredientes:['tomate','queso','jamón'],
            precio:8
        }
        return(
            <React.Fragment>{/* React.Fragment es para que dentro se puedan meter otros elementos,
            porque los elementos tienen que estar dentro de una etiqueta padre. Esta etiqueta se puede sustituir por un div */}
                <h1>Soy el componente "MiComponente"</h1>
                <p>Nombre:{receta.nombre}</p>
                <ol>Ingredientes:{receta.ingredientes.map((ingrediente,i)=>{
                        return(<li key={i}>{ingrediente}</li>);
                    })}
                </ol>
            </React.Fragment>
            
        );
    }
}

export default MiComponente;