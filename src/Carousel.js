import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = (props) => {
    return <div className="carousel">
        <h3>{props.titulo}</h3>
        <div className="carousel-container">
            {
                props.bares.map(bar =>
                    <Link to={"/bar/" + bar.id}>
                        <div className="carousel-item-container">
                            <div style={{ backgroundImage: `url(${bar.logo})`, backgroundSize: 'cover' }} className={"carousel-item " + (props.circular ? 'circular' : '')}>
                            </div>
                            <h5>
                                {bar.nombre}
                            </h5>
                        </div>
                    </Link>)
            }
        </div>
    </div>
}

export default Carousel;