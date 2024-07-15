import styled from 'styled-components'
import { TbTrashXFilled } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import { useState } from 'react';
import Modal from '../Modal';

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


const Card = ({ imagen, nombre, sombra }) => {
    const [estadoModal, setEstadoModal] = useState(false)
    return (
        <>
            <Container $sombra={sombra}>
                <img src={imagen} alt={nombre} style={{ width: "400px" }} />
                <DivEstilziado $sombra={sombra}>
                    <button onClick={() => console.log(imagen)}><TbTrashXFilled /> BORRAR</button>
                    <button onClick={() => setEstadoModal(!estadoModal)}><BiEditAlt /> EDITAR</button>
                </DivEstilziado>
                <Modal estado={estadoModal} setEstadoModal={setEstadoModal} alcerrar={false} />
            </Container >
        </>
    )
}

export default Card