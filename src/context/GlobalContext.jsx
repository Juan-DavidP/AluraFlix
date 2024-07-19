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

    const categoriasCards = Object.keys(cards)

    const url = 'http://localhost:3001/videos'

    useEffect(() => {
        async function getCards() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const categoriasVideos = data.reduce((categorias, card) => {
                    const categoria = card.category;
                    for (const nombre of categoriasCards) {
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

    async function createCard(title, category, photo, link, description) {
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                category,
                photo,
                link,
                description
            })
        }).then((res) => res.json()).catch((error) => console.error(error))
    }

    async function editCard(title, category, photo, link, description) {
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                category,
                photo,
                link,
                description
            })
        }
        )

    }



    return (
        <GlobalContext.Provider value={{
            cards, colors,
            categoriasCards, createCard, editCard
        }}>
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