import logo from './logo.svg';
import './App.css';
import Flashcard from './Components/Flashcard';
import data from './data';
import { Component } from 'react';
import Next from './Components/Next'
import Previous from './Components/Previous';

class App extends Component {
  constructor() {
    super();

    this.state = {
      flashCards: data,
      cardNum: 1,
    }

    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
  }

  nextCard() {
    if(this.state.cardNum === 25) {
      this.setState({cardNum: 1});
    } else {
      this.setState({cardNum: ++this.state.cardNum})
    }
    console.log(this.state.cardNum)
  }

  previousCard() {
    if(this.state.cardNum === 1) {
      this.setState({cardNum: 25});
    } else {
      this.setState({cardNum: --this.state.cardNum})
    }
    console.log(this.state.cardNum)
  }

  render() {
    return (
      <div className="App">
        <main className='content'>
          <header class='header'>
          <h3 id='home'>Home</h3>
          </header>
          <Flashcard flashCards={this.state.flashCards} cardNum={this.state.cardNum}/>
          <section>
            <Previous previousCard={this.previousCard}/>
            <Next nextCard={this.nextCard}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;