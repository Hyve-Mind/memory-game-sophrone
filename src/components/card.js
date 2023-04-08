import React from "react";
import "../styles/card.css";
import Beth from "../images/beth.jpeg";
import Eric from "../images/eric.jpeg";
import Francine from "../images/francine-smith.jpeg";
import Hayley from "../images/hayley-smith.jpeg";
import Jerry from "../images/jerry.png";
import Joe from "../images/joe.jpeg";
import Kenny from "../images/kenny.png";
import Kyle from "../images/kyle.jpeg";
import Morty from "../images/morty.png";
import Peter from "../images/peter.png";
import Quagmire from "../images/quagmire.png";
import Rick from "../images/rick.png";

function Card(props) {
  const character = props.character;
  const finalChar = character.charAt(0).toUpperCase() + character.slice(1);
  let finalImage;

  if (character === "beth") {
    finalImage = Beth;
  } else if (character === "eric") {
    finalImage = Eric;
  } else if (character === "francine") {
    finalImage = Francine;
  } else if (character === "hayley") {
    finalImage = Hayley;
  } else if (character === "jerry") {
    finalImage = Jerry;
  } else if (character === "joe") {
    finalImage = Joe;
  } else if (character === "kenny") {
    finalImage = Kenny;
  } else if (character === "kyle") {
    finalImage = Kyle;
  } else if (character === "morty") {
    finalImage = Morty;
  } else if (character === "peter") {
    finalImage = Peter;
  } else if (character === "quagmire") {
    finalImage = Quagmire;
  } else if (character === "rick") {
    finalImage = Rick;
  }

  return (
    <div className="card-container">
      <img
        className="card-image"
        src={finalImage}
        alt={character + "'s image"}
      />
      <div className="card-name">{finalChar}</div>
    </div>
  );
}

export default Card;
