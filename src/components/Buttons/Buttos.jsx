import styled from 'styled-components'

const ButtonEstilizado = styled.button`
    color: white;
    background-color: transparent;
    font-size: 20px;
    font-weight: 600;
    width: 200px;
    height: 55px;
    border: solid 2px ${props => props.$bordo ? "#2271D1" : "white"};
    border-radius: 10px;
    cursor: pointer;
`
// condicion? lo que sucede : el sino

const Button = ({ nombre, bordo, tipo }) => {


    return (
        //error por el link toca seperar botones formulario y cabecera
        <ButtonEstilizado type={tipo} $bordo={bordo} > {nombre}  </ButtonEstilizado>

    )
}

export default Button