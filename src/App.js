import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTutorial from './components/createTutorial.js';
import Navegacion from './components/navegacion.js'
import ApiTutorial from './apiTutorial';
import EditarTutorial from './components/editarTutorial.js';
class App extends Component {

    render() {

      return (
        
      <Router> 
          <Navegacion/>
          <div className="container p-4">
          <Route path="/tutoriales" component={ApiTutorial} />
          <Route path="/agregar" component={CreateTutorial} />
          <Route path="/editar/:id" component={EditarTutorial}/>
          </div>
      </Router>
      );
    };
  }

export default App;
