import React, { Component } from 'react';


class CreateTutorial extends Component {

state = {
   titulo: "",
   descripcion: "",
   publicado: false
}

onInputChange = (e) => {
   this.setState({
       [e.target.name]: e.target.value
   })
}

onSubmit = async (e) => {
    e.preventDefault()

     const nuevoTutorial = {
         titulo: this.state.titulo,
         descripcion: this.state.descripcion,
         publicado: this.state.publicado
     };

    try {
        await fetch(
        'https://api-unpaz-tutoriales.herokuapp.com/api/tutoriales',
        {
            method: "POST",
            body: JSON.stringify(nuevoTutorial),
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

    render() {
        return (
            <div className="col-md-6 offset-md-3">
              <div className="card card-body">
                <h4>Crear un Tutorial</h4>
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="titulo"
                    name="titulo"
                    onChange={this.onInputChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <textarea name="descripcion"
                    className="form-control"
                    placeholder="descripcion"
                    onChange={this.onInputChange}
                    required
                    >
                    </textarea>

                </div>
                <form onSubmit={this.onSubmit}>
                    <button type="submit" className="btn btn-primary">
                        Agregar
                    </button>
                </form>
              </div>
            </div>
        )
    }
}

export default CreateTutorial;