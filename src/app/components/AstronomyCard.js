import React from 'react';

// we get the "props" fromt he parent 
const AstronomyCard = (props) => {

    const { title, url, hdurl, explanation, data, copyright } = props.nasaapidata;

    //const 
     return (
            <div className ="astronomy-card">
                <h6 className="astronomy-title">{title}</h6>
                <a href={hdurl} className="astronomy-image-wrapper">
                    <img src={url} alt={title}/>
                </a>

                <p>{explanation}</p>

                <span>{data}, {copyright}</span>

            </div>
        )
}

export default AstronomyCard;