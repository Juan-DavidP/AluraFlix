import styled from "styled-components";
//A5A5A5
const SelectEstilizado = styled.select`
color: var(--blanco);
background-color: transparent;
width: ${props => props.$tamaño ? props.$tamaño : "320px"};
border: 2px solid ${props => props.$color};
border-radius: 15px;
padding: 10px 10px;
margin-bottom: 18px;
cursor: pointer;
&:focus{
    background-color: ${props => props.$colorBg};
}
`

const Select = ({ children, color, colorBg, tamaño, referencia }) => {
    return (
        <SelectEstilizado $color={color} $colorBg={colorBg} $tamaño={tamaño} ref={referencia} >
            {children}
        </SelectEstilizado>
    )
}

export default Select