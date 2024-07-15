import styled from "styled-components";

const DivEstilizado = styled.div`
background-color: rgba(0, 0, 0, .94);
display: flex;
flex-direction: column;
`
const Container = ({ children }) => {

    return (
        <DivEstilizado>
            {children}
        </DivEstilizado>
    )
}

export default Container