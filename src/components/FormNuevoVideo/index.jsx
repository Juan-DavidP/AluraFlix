import styled from "styled-components"
import Label from "../Label"
import Input from "../Input"
import Titulo from "../Titulo"
import Select from "../Select"
import TextArea from "../TextArea"
import Button from "../Buttons/Buttos"

//400 px = 29vw

const DivEstilizado = styled.div`
display: flex;
flex-direction: column;
`
const ContainerForm = styled.div`
display: flex;
gap: 30px;
margin-top: 50px;
`

const FormEstilizado = styled.form`
display: flex;
flex-direction: column;
margin-bottom: 40px;
`

const Form = () => {
    return (
        <div style={{ margin: "20px 12vw" }}>
            <Titulo titulo={"Crear Tarjeta"} tamaño={"36px"} color={"FFFFFF"} negrita={600}
                border={"2px"} />
            <FormEstilizado method="">
                <ContainerForm>
                    <DivEstilizado>
                        <Label titulo={"Titulo"} />
                        <Input tamaño={"400px"} color={"#A5A5A5"} placeholder={"ingrese el título"} />
                    </DivEstilizado>
                    <DivEstilizado>
                        <Label titulo={"Categoría"} />
                        <Select tamaño={"420px"} color={"#A5A5A5"} colorBg={"#191919"} >
                        </Select>
                    </DivEstilizado>
                </ContainerForm>
                <ContainerForm>
                    <DivEstilizado>
                        <Label titulo={"Imagen"} />
                        <Input tamaño={"470px"} color={"#A5A5A5"}
                            placeholder={"ingrese el enlace de la imagen"}
                        />
                    </DivEstilizado>
                    <DivEstilizado>
                        <Label titulo={"Video"} />
                        <Input tamaño={"440px"} color={"#A5A5A5"}
                            placeholder={"ingrese el enlace del video"}
                        />
                    </DivEstilizado>
                </ContainerForm>
                <ContainerForm>
                    <DivEstilizado>
                        <Label titulo={"Descripción"} />
                        <TextArea alto={"200px"} ancho={"470px"}
                            color={"#A5A5A5"}
                            placeholder={"¿De qué se trata este vídeo?"}
                        />
                    </DivEstilizado>
                </ContainerForm>
                <ContainerForm>
                    <Button color={true} nombre={"GUARDAR"} type={"submit"} bordo={true} />
                    <Button nombre={"LIMPIAR"} type={"reset"} />
                </ContainerForm>
            </FormEstilizado>
        </div >
    )
}

export default Form