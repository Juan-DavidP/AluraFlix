import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const colors = {
        "FRONT END": "#6bd1ff",
        "BACK END": "#33de86",
        "INNOVACIÓN Y GESTIÓN": "#FFBA05"
    }

    const [cards, setCards] = useState({
        "FRONT END": [],
        "BACK END": [],
        "INNOVACIÓN Y GESTIÓN": []
    });
    const clavesCards = Object.keys(cards)

    useEffect(() => {
        const getCards = async () => {
            try {
                const response = await fetch('http://localhost:3001/videos');
                const data = await response.json();
                const categoriasVideos = data.reduce((categorias, card) => {
                    const categoria = card.category;
                    for (const nombre of clavesCards) {
                        if (!categorias[nombre]) {
                            categorias[nombre] = [];
                        }
                        if (nombre === categoria) {
                            categorias[categoria].push(card);
                        }
                    }
                    return categorias;
                }, []);
                setCards(categoriasVideos)
            } catch (error) {
                console.error(error);
            }
        }
        getCards()
    }, [])

    return (
        <GlobalContext.Provider value={{ cards, colors, clavesCards }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider



/* codigo con error si no existe la categoría
const response = await fetch('http://localhost:8000/videos');
const data = await response.json();

const categoriasVideos = data.reduce((categorias, card) => {
    const categoria = card.category;
    if (!categorias[categoria]) {
        categorias[categoria] = [];
    }
    categorias[categoria].push(card);
    return categorias;
}, []);*/