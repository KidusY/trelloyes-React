import React from 'react'
import './List.css';
import Card from '../Card/Card.js';




function List(props) {
    const getCards= props.cardIds.map(id=><Card key={id} id={props.id} card={props.allCards[id]} onDelete={props.onDelete}/>)
    return(
        <div className='List'>
            <header className='list-header'>
               <h2>{props.header}</h2>
            </header>
            <button className='List-add-button' type='button' onClick={()=>props.onAdd(props.id)}>Add random card</button>
            <div className='List-cards'>
                {getCards}
            </div>
        </div>
    )    
}
List.defaultProps = {
    cardIds: [],
    allCards: {'': {  }},
    header: ''
}

export default List;