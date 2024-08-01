import { useContext } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import Categorias from "../components/Categorias"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import { GlobalContext } from "../context/GlobalContext"
import Modal from "../components/Modal"

const Home = () => {
    const { cards, colors, cardSeleccionada, setCardSeleccionada } = useContext(GlobalContext);
    return (
        <>
            <Header />
            <Banner />
            <Container >

                {
                    cards["FRONT END"].length > 0 &&
                    <Categorias nombre={"FRONT END"} color={colors["FRONT END"]} >
                        {cards["FRONT END"].map((card) => {
                            return <Card key={card["id"]} imagen={card["photo"]} nombre={card["title"]}
                                card={card}
                                sombra={colors["FRONT END"]} />
                        })}
                        {/* <Card imagen="/img/frontend1.png" nombre={"Foto"} /> */}
                    </Categorias>}
                {
                    cards["BACK END"].length > 0 &&
                    <Categorias nombre={"BACK END"} color={colors["BACK END"]} >
                        {cards["BACK END"].map((card) => {
                            return <Card key={card["id"]} imagen={card["photo"]} nombre={card["title"]}
                                sombra={colors["BACK END"]}
                                card={card} />
                        })}
                        {/* <Card imagen="/img/frontend1.png" nombre={"Foto"} sombra={"#33de86"} /> */}
                    </Categorias>
                }
                {
                    cards["INNOVACIÓN Y GESTIÓN"].length > 0 &&
                    < Categorias nombre={"Innovacion y gestión"} color={colors["INNOVACIÓN Y GESTIÓN"]} >
                        {cards["INNOVACIÓN Y GESTIÓN"].map((card) => {
                            return <Card key={card["id"]} imagen={card["photo"]}
                                nombre={card["title"]}
                                sombra={colors["INNOVACIÓN Y GESTIÓN"]}
                                card={card} />
                        })}
                    </Categorias>
                }<Modal card={cardSeleccionada} alcerrar={() => setCardSeleccionada(null)} />
            </Container >
            <Footer />
        </>
    )
}

export default Home