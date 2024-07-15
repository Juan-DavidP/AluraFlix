import styled from 'styled-components'
const ButtonEstilizado = styled.button`
    color: ${props => props.$color ? "#2271D1" : "white"};
    background-color: ${props => props.$colorBg ? "black" : "transparent"};
    font-size: 20px;
    font-weight: 600;
    width: 140px;
    height: 40px;
    margin-bottom: 5px;
    border: solid 2px ${props => props.$color ? "#2271D1" : "white"};
    border-radius: 8px;
    box-shadow: ${props => props.$sombra ? " inset 0px 0px 11px 0px rgba(34,113,209,1)" : "none"};
    cursor: pointer;
    `


const ButtonForm = ({ nombre, color, sombra, colorBg, type="submit" }) => {
    return <ButtonEstilizado type={type} $sombra={sombra} $color={color} $colorBg={colorBg}> {nombre} </ButtonEstilizado>
}

export default ButtonForm