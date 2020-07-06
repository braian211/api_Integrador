import React, { Component } from "react";

class BarraNav extends Component {

    render(){

        return (
            <div>
            <header>
                <nav>
                   <ul>
                    <li><a href="/">Unpaz</a></li>
                    <li><a href="/tutoriales">Tutoriales</a></li>
                    <li><a href="/create">Agregar Tutorial</a></li>
                   </ul>
                </nav>
            </header>
        </div>

        )
        
    }
}

export default BarraNav;