import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper/";
import CardWrapper from "./components/CardWrapper";
import PokemonCard from "./components/Card";
import pokemons from "./cards.json";
import './App.css';


class App extends Component{
  state={
    pokemons: pokemons,
    score: 0,
    highScore: 0
  };
  
  clickEvent = (id) => {
    this.pokemonClicked(id);
    this.shufflePokemon();
  };

  pokemonClicked = (id) => {
    this.setState({
      pokemons:pokemons.map(pokemon => {
        if (pokemon.id === id && pokemon.clicked === "false") {
          pokemon.clicked = "true";
          this.updateScore();
        }
        else if (pokemon.id === id && pokemon.clicked === "true"){
          this.gameOver();
        }
        return pokemon;
      })
    });
  };

  updateScore = () => {
    this.setState({score:this.state.score+1}, () => 
    this.checkHighScore());
  }

  randomizeArray = (arr) => {
    return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);
  }

  checkHighScore = () => {
    if(this.state.score>this.state.highScore){
      this.setState({highscore: this.state.score});
    }
    if(this.state.score === 12){
      alert("You win!")
      this.restartGame();
    }
  }

  shufflePokemon = () => {
    this.setState({ pokemons:this.randomizeArray(this.state.pokemons)});
  }

  gameOver = () => {
    alert("game over");
    this.restartGame();
  }

  restartGame = () => {
    this.setState({score:0, pokemons:pokemons.map(pokemon=>pokemon.clicked="false")});
  }

  render(){
    return(
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}></Header>
        <CardWrapper>
          {pokemons.map(pokemon => (
            <PokemonCard id={pokemon.id} key={pokemon.id} image={pokemon.image} clicked={pokemon.clicked} onClick={this.clickEvent}></PokemonCard>
          ))}
        </CardWrapper>
      </Wrapper>
    )
  }

}

export default App;
