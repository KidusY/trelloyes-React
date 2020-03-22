import React from 'react'
import './List.css';
import Card from '../Card/Card.js';


function List(props) {
    console.log(props);
    
    const array= props.cards;
    const obj= props.allCards;
    const getCards= array.map(id=><Card key={id} title={obj[id].title} content={obj[id].content}/>)
    return(
        <div className='List'>
            <header>
               <h2> {props.header} </h2>
            </header>
            <div className='List-cards'>
                {getCards}
            </div>
        </div>
    )    
}

export default List;