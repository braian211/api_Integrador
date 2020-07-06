import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SubCombo extends Component {
    state = {
        titulo: "",
        descripcion: "",
        publicado: ""
    };


    render() {
        const { titulos, onClick1 } = this.props
        var vec = { titulo: "", descripcion: "", publicado: "" }
        titulos.find(e => {
            if (e.id === parseInt(onClick1))
               vec.titulo = e.titulo 
        })
        titulos.find(d => {
            if (d.id === parseInt(onClick1))
                vec.descripcion = d.descripcion
        })
        titulos.find(p => {
            if (p.id === parseInt(onClick1))
                vec.publicado = p.publicado
        })

        console.log(vec)

        return (
            <div>
                <ul className="list-group">
                    titulo: {vec.titulo}
                </ul>
                <p>Descripcion: {vec.descripcion}</p>
                 <p> estado: {vec.publicado ? <h5>publicado</h5> : <h5>pendiente</h5>}</p>
                  <Link to={`/editar/${onClick1}`}>
                 <button>Editar</button>
                 </Link>
            </div>
        )
    }

}

export default SubCombo;