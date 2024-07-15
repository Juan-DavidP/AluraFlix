import styled from "styled-components";

const TituloEstilizado = styled.h2`
text-align: center;
font-size: ${props => props.$tamaño};
font-weight: ${props => props.$negrita ? props.$negrita : 700};
text-align: ${props => props.$alineamiento ? props.$alineamiento : "left"};
color: #F5F5F5;
margin-top: 50px;
padding: 25px 0;
border-top: solid #3c3b3b ${props => props.$border? props.$border: 0};
border-bottom: solid #3c3b3b ${props => props.$border? props.$border: 0};

`
const Titulo = ({ titulo, tamaño, color, alineamiento, negrita, border }) => {
    return <TituloEstilizado $tamaño={tamaño} $color={color}
        $alineamiento={alineamiento}
        $negrita={negrita}
        $border={border}
    >
        {titulo}
    </TituloEstilizado>
}

export default Titulo