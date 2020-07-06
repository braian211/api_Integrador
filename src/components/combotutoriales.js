import React, { Component } from 'react';
import SubCombo from './subComp.js'

class ComboTutoriales extends Component {

    state = {
        id: 0,
        estado: false
    };

    onClick1 = (ids) => {
        const pasar = ids
        this.setState({ id: pasar, estado: true })
    }
    eliminarTodos = async () => {
        try{
            await fetch('https://api-unpaz-tutoriales.herokuapp.com/api/tutoriales', {method: 'DELETE'});
        }catch (err) {
            alert("Se produjo el siguiente error: " + err)
        }
    }

    render() {

        const { titulos } = this.props;
        console.log(titulos)

        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="card card-body">
                        <h5> Lista de tutoriales  </h5>
                        
                        <ul className="list-group ">
                            {
                                titulos.map(name => <li className="list-group-item list-group-item-action" key={name.id}>
                                    <button type="button" className="list-group-item list-group-item-action " onClick={() => this.onClick1(name.id)}>{name.titulo}</button>
                                </li>)
                            }
                        </ul>
                        
                        <button button type="button" class="btn btn-danger" 
                        onClick={() =>this.eliminarTodos()}>Borrar Todos</button>
                    </div>
                </div>
                {this.state.estado ? (
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">detalle de tutoriales</h5>
                                <SubCombo titulos={titulos} onClick1={this.state.id} />
                            </div>
                        </div>
                    </div>) : (
                        <h1></h1>
                    )}
            </div>

        )
    }
}

export default ComboTutoriales;