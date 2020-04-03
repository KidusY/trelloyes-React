import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="Card">
            <button type="button" onClick={()=>props.onDelete(props.card.id,props.id)}>Delete</button>
            <h3>{props.card.title}</h3>
            <p>{props.card.content}</p>
        </div>
    )
}

export default Card;