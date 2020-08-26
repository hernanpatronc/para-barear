import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const BarDetail = (props) => {
    // console.log(props);
    const [bar,setBar] = useState({});
    useEffect(()=>{
        const getBar = async () => {
            setBar(await fetch(props.url + '/bares/' + props.match.params.id).then(res=>res.json()))
        }
        getBar()
    },[ props.match.params.id])
    useEffect(()=>{
        console.log(bar)
    }, [bar])
    return <div>
        <div className="banner">
            <img className="bck-img" src={bar.imagenes && bar.imagenes[0]}/>
            <div className="bck-overlay"></div>
            <div className="logo-container">
                <img src={bar.logo} />
            </div>
        </div>
       
        <div className="detalles">
            <h2>{bar.nombre}</h2>
            <p>{bar.descripcion}</p>
            <ul>
                <li>{bar.zona}</li>
                <li>{bar.ubicacion}</li>
                <li>{bar.telefono}</li>
                <li>{bar.web || 'No tiene página web'}</li>
            </ul>
            <div className="images-carousel">
            {bar.imagenes && bar.imagenes.map(image => <img src={image} />)}
        </div>
        <div className="map-container">
                {bar.latitud && <Map style={{width: '100%',height: '150px'}} draggable={false} fullscreenControl={false} scrollwheel={false} zoomControl={false} scaleControl={false} streetViewControl={false} mapTypeControl={false} google={props.google} zoom={14} initialCenter={{lat: bar.latitud, lng: bar.longitud}}>
            
            <Marker position={{lat: bar.latitud, lng: bar.longitud}}  />
        
        </Map>}
        </div>
        </div>

      
        
    </div>
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDjMmyKjz1jhm_uMDh5m66V64KqYIVTnLk')
  })(BarDetail)