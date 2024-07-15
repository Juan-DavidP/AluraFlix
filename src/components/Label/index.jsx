import styled from "styled-components"

const LabelEstilizado = styled.label`
color: var(--blanco);
font-size: 20px;
font-weight: 500;
margin-bottom: 5px;
`
const Label = ({ titulo }) => {
    return <LabelEstilizado>{titulo}</LabelEstilizado>
}
export default Label