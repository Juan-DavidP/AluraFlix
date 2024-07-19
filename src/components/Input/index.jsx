import styled from "styled-components";

const InputEstilizado = styled.input`
color: var(--blanco);
background-color: transparent;
width: ${props => props.$tamaño ? props.$tamaño : "300px"};
border: 2px solid ${props => props.$color};
border-radius: 15px;
padding: 10px 10px;
margin-bottom: 18px;
&::placeholder{
    color: #A5A5A5;
}
`

const Input = ({ placeholder, color, tamaño, referencia }) => {
    return <InputEstilizado placeholder={placeholder} $color={color} $tamaño={tamaño}
        ref={referencia}
    />

}

export default Input