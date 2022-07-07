import React, { useContext, useState } from "react";
import PlayerContext from "../context/PlayerContext";
import "./Turno.css";

const Turno = ({ id, players, guessWord, onUpdate }) => {
  const { selectedWord, setSelectedWord } = useContext(PlayerContext);

  //facu1111
  // IdrXCDuWCawETlVMPlh8

  return (
    <div className="Main">
      <div>
        <h2>Turno</h2>
        <div className="Wrapper">
          <h3>game id:</h3>
          <p>{id}</p>
        </div>
        <div className="Wrapper">
          <h3>online players:</h3>
          <p>{players.length}</p>
        </div>
      </div>
      <div className="Wrapper">
        <p>la palabra a completar es: {guessWord}</p>
      </div>
      <div>
        <p>ingresa tu palabra</p>
        <input
          type="text"
          value={selectedWord}
          onChange={(e) => setSelectedWord(e.target.value)}
        />
        <button type="button" onClick={onUpdate}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Turno;