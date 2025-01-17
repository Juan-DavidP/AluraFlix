import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonEstilizado = styled.button`
    color: ${props => props.$activo ? "#2271D1" : "white"};
    background-color: ${props => props.$activo ? "black" : "transparent"};
    font-size: 20px;
    font-weight: 600;
    width: 200px;
    height: 55px;
    border: solid 2px ${props => props.$activo ? "#2271D1" : "white"};
    border-radius: 10px;
    box-shadow: ${props => props.$activo ? " inset 0px 0px 20px 0px rgba(34,113,209,1)" : "none"};
    cursor: pointer;
`
// condicion? lo que sucede : el sino

const ButtonNavegacion = ({ nombre, link }) => {
    const validacion = window.location.pathname === link ? true : false;
    return (
        //error por el link toca seperar botones formulario y cabecera
        <Link to={link}>
            <ButtonEstilizado $activo={validacion}>
                {nombre}  </ButtonEstilizado>
        </Link>
    )
}

export default ButtonNavegacion

