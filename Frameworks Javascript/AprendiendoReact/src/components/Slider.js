import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Slider extends Component {
    render() {
        return (
            <div id="slider" className={this.props.size}>
                <div className="clearfix"></div>
                <h1>{this.props.title}</h1>
                {this.props.btn &&
                    <NavLink to="/blog" activeClassName="active" className="btn-white">
                        {this.props.btn}

                    </NavLink>

                }
            </div>
        );
    }
}
export default Slider;
