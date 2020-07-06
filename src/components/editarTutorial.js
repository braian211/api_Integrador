import React, { Component } from 'react';

class EditarTutorial extends Component {
state = {
    titulo: "",
    descripcion: "",
    publicado: "",
    id: ''
}

async componentDidMount() {
    this.capturar()
}
capturar = async () => {
    try {
        const datos = await fetch('https://api-unpaz-tutoriales.herokuapp.com/api/tutoriales/' + this.props.match.params.id, {method: 'GET'})
        const tuto = await datos.json()
        this.setState({
            titulo: tuto.titulo, 
            descripcion: tuto.descripcion,
            publicado: tuto.publicado,
            id:this.props.match.params.id
        })
      } catch (err) {
        alert("Se produjo el siguiente error: " + err)
      }
}

actualizar = async () => {

    const actualizarTutorial = {
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        publicado: this.state.publicado
    };
    try {
       await fetch(
       'https://api-unpaz-tutoriales.herokuapp.com/api/tutoriales/'+ this.state.id,
       {
           method: "PUT",
           body: JSON.stringify(actualizarTutorial),
           headers: {
               "content-type": "application/json",
           },
       }
      );
   }catch (err){
       alert("Se produjo el siguiente error: " + err)
   }
   window.location.href = '/tutoriales'
}

eliminar = async (id) => {
    try {
    await fetch('https://api-unpaz-tutoriales.herokuapp.com/api/tutoriales/'+ id, {method: 'DELETE'});
   }catch (err){
    alert("Se produjo el siguiente error: " + err)
   }
   window.location.href = '/tutoriales'
}

onInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    }) 
 }

onClick = () => {
  this.setState({publicado:!this.state.publicado})

}

onSubmit = async (e) => {
    e.preventDefault()
}


    render() {
        return (
            <div className="col-md-6 offset-md-3">
              <div className="card card-body">
                <h4>Editar Tutorial</h4>
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="titulo"
                    name="titulo"
                    onChange={this.onInputChange}
                    value={this.state.titulo}
                    required
                    />
                </div>
                <div className="form-group">
                    <textarea name="descripcion"
                    className="form-control"
                    placeholder="descripcion"
                    onChange={this.onInputChange}
                    value={this.state.descripcion}
                    required
                    >
                    </textarea>

                </div>
                <div>
                   <h5> Estado = {this.state.publicado ? <h5>publicado</h5> : <h5>pendiente</h5>}</h5>
                </div>
                <form onSubmit={this.onSubmit}>
                    <button type="submit" className="btn btn-success" onClick={() => this.actualizar()}>
                        Actualizar tutorial
                    </button>
                    <button className="btn btn-primary" onClick={this.onClick}>
                        Publicar Tutorial
                    </button>
                    <button className="btn btn-danger" onClick={ () => this.eliminar(this.state.id)}>
                        Eliminar Tutorial
                    </button>
                </form>
              </div>
            </div>
        )
}
}

export default EditarTutorial;