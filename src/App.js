import React from 'react';
import './App.css';
import List from './cardList/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
        ],
        allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
        }
    }
  }

  handleDeleteItem= (card,id)=> {
    console.log('Delete card',card,'in list', id)
    const currentCardIds=this.state.lists[id-1].cardIds;
    const newLists= this.state.lists.map(list=>{
      if (list.id === id) list.cardIds =currentCardIds.filter(item=>item!==card)
      return list})
 
    this.setState({
        lists: newLists
    })
  }

  newRandomCard= (id) => {
    const randomId = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);

    const newLists= this.state.lists.map(list=>{
      console.log(id)
      if (list.id === id) list.cardIds=[...list.cardIds, randomId]
      return list})

    const newRandomCard= {
      id: `${randomId}`,
      title: `Random Card ${randomId}`,
      content: 'lorem ipsum',
    }
    console.log(newRandomCard)

    const {allCards} = this.state
    const newCard = allCards
    newCard[`${randomId}`]= newRandomCard
    console.log(newCard)
    this.setState ({
      lists: newLists,
      allCards: newCard,
    })
    console.log(newLists)
  }
    
    

  render () {
    const Lists=this.state.lists.map(obj=><List key={obj.id} id={obj.id} header={obj.header} cardIds={obj.cardIds} allCards={this.state.allCards} onDelete={this.handleDeleteItem} onAdd={this.newRandomCard}/>);
    return (
      <div className="App"> 
        <header>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {Lists}
        </div>
    </div>
    )
  }
}

export default App;
