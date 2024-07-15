import styled from "styled-components"
import { IoCloseCircleOutline } from "react-icons/io5";
import FormModal from './FormModal'

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    `
const DialogEstilizado = styled.dialog`
background-color: #03122F;
border: #03122F;
border-radius: 15px;
/* box-shadow: 0px 5px 10px 11px rgba(34, 113, 209, 1); */
border: 5px solid rgba(34, 113, 209, 1);
width: 450px;
margin-top: 20px;
margin-bottom: 100px;
`

const BotonCerrar = styled.button`
position: absolute;
top: 15px;
right: 15px;
font-size: 30px;
color: var(--blanco);
cursor: pointer;
`
const DivEstilizado = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;


h2{
    font-size: 45px;
    font-weight: 600;
    color: #2271D1;
    text-align: left;
    margin-bottom: 10px;
}
`




const Modal = ({ estado, setEstadoModal }) => {
    return (
        <>
            {estado &&
                <Overlay>
                    <DialogEstilizado open={estado}  >
                        <form method="dialog">
                            <BotonCerrar>
                                <IoCloseCircleOutline onClick={() => setEstadoModal(false)} />
                            </BotonCerrar>
                        </form>
                        <DivEstilizado>
                            <h2>Editar card:</h2>
                            <FormModal />
                        </DivEstilizado>

                    </DialogEstilizado>
                </Overlay>
            }
        </>
    )
}

export default Modal