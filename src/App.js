import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import Carousel from './Carousel';
const url = 'http://localhost:3000';

// https://parabarear.com
// https://api.parabarear.com

// API: Application Programming Interface

function App() {
  const [mejoresBares,setMejoresBares] = useState([]);
  const [baresCerca,setBaresCerca] = useState([]);
  const [baresAmigos,setBaresAmigos] = useState([]);
  useEffect(()=>{
    const getBares = async () => {
      // const nombre = prompt("Ingrese nombre del bar");
      // const ubicacion = prompt("Ingrese ubicación");
      // await fetch('https://bares.t.estylar.com/bares',{
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     nombre: nombre,
      //     ubicacion: ubicacion
      //   })
      // }).then(res=>res.json())
      setMejoresBares(await fetch(url + '/bares').then(res=>res.json()))
      // setBaresCerca(await fetch('https://bares.t.estylar.com/bares').then(res=>res.json()))
      // setBaresAmigos(await fetch('/baresAmigos.json').then(res=>res.json()))
    }
    getBares();
  },[]);
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/" exact >
            <Search></Search>
            <Carousel bares={mejoresBares} titulo="Los mejores bares para vos" circular={true}></Carousel>
            <Carousel bares={baresCerca} titulo="Cerca tuyo"></Carousel>
            <Carousel bares={baresAmigos} titulo="Según tus amigos"></Carousel>
          </Route>
          <Route path="/bar/:id"  >
            <h3>Pediste información de un bar</h3>
            <Link to="/">Go back</Link>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
