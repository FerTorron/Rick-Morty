import React, { createContext, useContext, useState, useEffect } from 'react';

const CharacterContext = createContext();

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => setPersonajes(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <CharacterContext.Provider value={personajes}>
            {children}
        </CharacterContext.Provider>
    );
};
