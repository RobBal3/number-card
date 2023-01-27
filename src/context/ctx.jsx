import { createContext, useState } from 'react';
import generateRandomNumber from '../utils/generateRandomNumber';
export const mainContext = createContext([]);

function MainContextProvider({ children }) {
    const [cards, setCards] = useState([]);

    function addCard() {
        setCards((prevItems) => {
            return [...prevItems, generateRandomNumber()];
        });
    }

    function deleteCard(id) {
        setCards((prev) => {
            return prev.filter((card) => card.id !== id);
        });
    }

    function sortCards() {
        setCards((prev) => {
            let arrCopy = [...prev];
            return arrCopy.sort((a, b) => {
                return a.number - b.number;
            });
        });
    }

    return (
        <mainContext.Provider
            value={{ cards, setCards, addCard, deleteCard, sortCards }}
        >
            {children}
        </mainContext.Provider>
    );
}

export default MainContextProvider;
