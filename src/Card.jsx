import React, {useState} from 'react'
import CardModule from "./Card.module.css";


const Card = (props) => {
    return (
        <div className= {`${CardModule.cards}`}>
            <h2>Información ingresada</h2>
            Nombre del libro: {props.name}
            <br/>
            Autor: {props.author}
        </div>
        
    )
}

export default Card