import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Friendcard from "./components/Friendcard";
import Row from "./components/Row/Row";
import Footer from "./components/Footer";
import pokemon from "./pokemon.json";



class App extends Component {
  state = {
    pokemon,
    clickedMon: [],
    score: 0
  };
  
  //clicking on an image - removes it from the array
  imageClick = event => {
    const currentMon = event.target.alt;
    const alreadyClickedMon = 
      this.state.clickedMon.indexOf(currentMon) > -1;
  
  //clicking on an already clicked mom, resets the game and cards
    if(alreadyClickedMon) {
      this.setState({
        pokemon: this.state.pokemon.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedMon: [],
        score: 0
      });
        alert("You didn't catch them all.  Play again?");
     
  //clicking on available pokemon increases your score and reorders the cards
    
      } else {
        this.setState(
          {
            pokemon: this.state.pokemon.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedMon: this.state.clickedMon.concat(
              currentMon
            ),
            score: this.state.score + 1
          },
  //if you get all 12 pokemon, congrats alert - game resets
        () => {
          if (this.state.score === 12) {
            alert("You are the very best, the best there ever was!");
            this.setState({
              pokemon: this.state.pokemon.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
                clickedMon: [],
                score: 0
            });
          }       
          }        
        );
      
  }
};


  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          <Row>
          {this.state.pokemon.map(pokemon => (
            <Friendcard 
                imageClick={this.imageClick}
                id={pokemon.id}
                key={pokemon.id}
                image={pokemon.image}
              />  
        
          ))}
           </Row>
        </div>
            <Footer />
         </div>
    );
  }
}

export default App;
