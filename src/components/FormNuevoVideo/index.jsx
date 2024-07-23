import styled from "styled-components"
import Label from "../Label"
import Input from "../Input"
import Titulo from "../Titulo"
import Select from "../Select"
import TextArea from "../TextArea"
import Button from "../Buttons/Buttos"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext, useEffect, useRef } from "react"

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
    const { categoriasCards, createCard } = useContext(GlobalContext)
    // console.log(categoriasCards);
    const refTitulo = useRef()
    const refCategoria = useRef()
    const refImagen = useRef()
    const refVideo = useRef()
    const refDescripcion = useRef()
    const refFormulario = useRef()

    useEffect(() => {
        console.log(refTitulo.current.validity);
    }, [])

    return (
        <div style={{ margin: "20px 12vw" }}>
            <Titulo titulo={"Crear Tarjeta"} tamaño={"36px"} color={"FFFFFF"} negrita={600}
                border={"2px"} />
            <FormEstilizado ref={refFormulario} method="POST" onSubmit={(e) => {
                e.preventDefault()
                createCard(
                    refTitulo.current.value,
                    refCategoria.current.value,
                    refImagen.current.value,
                    refVideo.current.value,
                    refDescripcion.current.value
                ).then((res) => { console.log(res); refFormulario.current.reset() })
                    .catch((err) => console.log(err))

            }}>
                <ContainerForm>
                    <DivEstilizado>
                        <Label titulo={"Titulo"} />
                        <Input tamaño={"400px"} color={"#A5A5A5"}
                            placeholder={"ingrese el título"}
                            referencia={refTitulo}
                            name={"titulo"}
                            requerido={true}
                        />
                    </DivEstilizado>
                    <DivEstilizado>
                        <Label titulo={"Categoría"} />
                        <Select tamaño={"420px"} color={"#A5A5A5"}
                            colorBg={"#191919"}
                            referencia={refCategoria}
                            requerido={true}>
                            {categoriasCards.map((categoria, index) =>
                                <option key={index} value={categoria}>
                                    {categoria}
                                </option>)}
                        </Select>
                    </DivEstilizado>
                </ContainerForm>
                <ContainerForm>
                    <DivEstilizado>
                        <Label titulo={"Imagen"} />
                        <Input tamaño={"470px"} color={"#A5A5A5"}
                            placeholder={"ingrese el enlace de la imagen"}
                            referencia={refImagen}
                            name={"imagen"}
                            requerido={true}
                        />
                    </DivEstilizado>
                    <DivEstilizado>
                        <Label titulo={"Video"} />
                        <Input tamaño={"440px"} color={"#A5A5A5"}
                            placeholder={"ingrese el enlace del video"}
                            referencia={refVideo}
                            name={"video"}
                            requerido={true}
                        />
                    </DivEstilizado>
                </ContainerForm>
                <ContainerForm>
                    <DivEstilizado>
                        <Label titulo={"Descripción"} />
                        <TextArea alto={"200px"} ancho={"470px"}
                            color={"#A5A5A5"}
                            placeholder={"¿De qué se trata este vídeo?"}
                            referencia={refDescripcion}
                            requerido={true}
                        />
                    </DivEstilizado>
                </ContainerForm>
                <ContainerForm>
                    <Button color={true} tipo={"submit"} nombre={"GUARDAR"} bordo={true} />
                    <Button nombre={"LIMPIAR"} tipo={"reset"} />
                </ContainerForm>
            </FormEstilizado>
        </div >
    )
}

export default Form