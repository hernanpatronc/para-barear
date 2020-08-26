import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import Carousel from './Carousel';
import BarDetail from './BarDetail';
import Footer from './Footer';


const url = 'http://localhost:3000';

// https://parabarear.com
// https://api.parabarear.com

// API: Application Programming Interface

function App() {
  const [search,setSearch] = useState('');
  const [mejoresBares,setMejoresBares] = useState([]);
  const [baresCerca,setBaresCerca] = useState([]);
  const [baresAmigos,setBaresAmigos] = useState([]);
  const getBares = async (search) => {
    setMejoresBares(await fetch(url + '/bares' + (search ? `?search=${search}` : '')).then(res=>res.json()))
  }
  useEffect(()=>{
    getBares(search);
  },[search]);

  return (
    <div>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/" exact >
            <div className="home-container">
            <Search search={search} onChange={ev=>setSearch(ev.target.value)}></Search>
            <Carousel bares={mejoresBares} titulo="Los mejores bares para vos" circular={true}></Carousel>
            <Carousel bares={baresCerca} titulo="Cerca tuyo"></Carousel>
            <Carousel bares={baresAmigos} titulo="Según tus amigos"></Carousel>
            </div>
            
          </Route>
          <Route path="/bar/:id" component={props=> <BarDetail {...props} url={url}></BarDetail>} />
            
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
