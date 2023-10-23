import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  const getCircleColor = (status) => {
    return status === "Alive" ? "green" : status === "Dead" ? "red" : "gray";
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <Container>
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} style={{width:"200px", height:"150px"}} />
            <p>{character.name}
            <h4>{character.status}</h4>
            </p>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: getCircleColor(character.status), 
              }} 
              
            ></div>
          </div>
        ))}
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #e8bcb9;
`;
export default CharacterList;
