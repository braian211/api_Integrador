import React, {Component} from 'react';
import './App.css';
import ComboTutoriales from './components/combotutoriales.js'

class ApiTutorial extends Component {

  state = {
    titulos : [],
  };

  componentDidMount() {
    this.datosTitulos()
  }

  datosTitulos = async () => {
    try { 
      const datos = await fetch('https://api-unpaz-tutoriales.herokuapp.com/api/tutoriales', {method: 'GET'})
      const titulos = await datos.json()
      this.setState({titulos: titulos})
    } catch (err) {
      alert("Se produjo el siguiente error: " + err)
    }
  }

  render() {

    const {titulos} = this.state;

    return (
    <div className="apiTutorial">
      <ComboTutoriales titulos={titulos}/>
    </div>
    );
  };
}

export default ApiTutorial;
