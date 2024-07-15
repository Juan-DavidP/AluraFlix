import Container from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import Form from "../components/FormNuevoVideo"
import Titulo from "../components/Titulo"

const NuevoVideo = () => {
    return (
        <>
            <Header />
            <Container>
                <Titulo titulo={"NUEVO VIDEO"} tamaño={"60px"} alineamiento={"center"} />
                <Form />
            </Container>
            <Footer />
        </>
    )
}

export default NuevoVideo