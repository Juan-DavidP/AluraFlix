import styled from 'styled-components'
import { TbTrashXFilled } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { useContext } from 'react';
import Modal from '../Modal';
import { GlobalContext } from '../../context/GlobalContext';

const Container = styled.div`
box-shadow:${props => props.$sombra && `0px 0px 5px 5px ${props.$sombra}`};
border-radius: 20px;
img{
    border-radius: 20px 20px 0px 0px;
}
`

const DivEstilziado = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    color: var(--blanco);
    margin-top: 0px;
    padding: 10px 0;
    width: 400px;
    border-radius: 0 0 10px 10px;
    box-shadow: ${props => props.$sombra && `0px 0px 5px 5px ${props.$sombra}`};
    button{
        cursor: pointer;
    }
`
////// Creación de metodo delete

const Card = ({ imagen, nombre, sombra, card }) => {
    const { setCardSeleccionada, deleteCard } = useContext(GlobalContext)
    return (
        <>
            <Container $sombra={sombra}>
                <img src={imagen} alt={nombre} style={{ width: "400px", height:"225px"}} />
                <DivEstilziado $sombra={sombra}>
                    <button onClick={() => deleteCard(card.id)}><TbTrashXFilled /> BORRAR</button>
                    <button onClick={() => setCardSeleccionada(card)}><BiEditAlt /> EDITAR</button>
                </DivEstilziado>
                <Modal estado={card} alcerrar={setCardSeleccionada} />
            </Container >
        </>
    )
}

export default Card