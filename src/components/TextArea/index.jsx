import styled from "styled-components";

const TextAreaEstilizado = styled.textarea`
color: var(--blanco);
background-color: transparent;
resize: none;
width: ${props => props.$ancho ? props.$ancho : "300px"};
height: ${props => props.$alto && props.$alto};
border: 2px solid ${pros => pros.$color};
border-radius: 15px;
padding: 10px 10px;
&::placeholder{
    color: var(--placeholder-color)}
`

const TextArea = ({ placeholder, color, alto, ancho, referencia, requerido }) => {
    return <TextAreaEstilizado placeholder={placeholder} $color={color}
        $alto={alto} $ancho={ancho}
        name="Descripcion"
        ref={referencia}
        required={requerido}
        style={{ '--placeholder-color': '#A5A5A5' }}

    />
}

export default TextArea