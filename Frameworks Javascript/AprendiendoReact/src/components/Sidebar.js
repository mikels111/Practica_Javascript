import React, { Component } from 'react';
class Sidebar extends Component {
    render() {
        return (
            <aside id="sidebar">
                {this.props.blog === 'true' &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href='/' className="btn btn-success">Crear articulo</a>
                    </div>

                }


                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra un articulo</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="subit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }
}
export default Sidebar;
