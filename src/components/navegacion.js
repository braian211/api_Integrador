import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        UNPAZ
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/tutoriales">Tutoriales</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/agregar">Agregar Tutorial</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navegacion;