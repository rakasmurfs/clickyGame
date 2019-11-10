import React from "react";


const PokemonCard = (props) => (
      <div className="card">
        <div className="img-container" styles="margin:15px;">
          <img alt={props.name} src={props.image} onClick={() => props.onClick(props.id)} clicked={props.clicked}/>
        </div>
      </div>
    );
  
  export default PokemonCard;