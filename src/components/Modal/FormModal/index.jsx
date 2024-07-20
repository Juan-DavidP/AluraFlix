import styled from "styled-components"
import ButtonForm from "./ButtonForm"
import Label from "../../Label"
import Input from "../../Input"
import Select from "../../Select"
import TextArea from "../../TextArea"
import { useContext, useRef, useState } from "react"
import { GlobalContext } from "../../../context/GlobalContext"

const FormEstilizado = styled.form`
display: flex;
flex-direction: column;
justify-content: start;
`

const DivEstilizado = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`


const FormModal = ({ card }) => {
    const { categoriasCards, editCard } = useContext(GlobalContext)
    const refTitulo = useRef()
    const refCategoria = useRef()
    const refImagen = useRef()
    const refVideo = useRef()
    const refDescripcion = useRef()
    const refFormulario = useRef()

    return (
        <>

            <FormEstilizado method="POST" ref={refFormulario} onSubmit={(e) => {
                e.preventDefault();
                editCard(
                    card.id,
                    refTitulo.current.value.length != 0 ? refTitulo.current.value : card.title,
                    refCategoria.current.value.length != 0 ? refCategoria.current.value : card.category,
                    refImagen.current.value.length != 0 ? refImagen.current.value : card.photo,
                    refVideo.current.value.length != 0 ? refVideo.current.value : card.link,
                    refDescripcion.current.value != 0 ? refDescripcion.current.value : card.description
                );
                refFormulario.current.reset();
            }
            }>
                <Label titulo={"Título"} />
                <Input placeholder={"¿qué es javascript?"} color={"#2271D1"}
                    referencia={refTitulo} />

                <Label titulo={"Categoria"} />
                <Select color={"#2271D1"}
                    colorBg={"#03122F"}
                    referencia={refCategoria}>
                    {categoriasCards.map((categoria, index) => <option
                        key={index} value={categoria}> {categoria} </option>)}
                </Select>

                <Label titulo={"Imagen"} />
                <Input
                    placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
                    color={"#2271D1"}
                    referencia={refImagen} />

                <Label titulo={"Video"} />
                <Input
                    placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
                    color={"#2271D1"}
                    referencia={refVideo} />

                <Label titulo={"Descripción"} />
                <TextArea
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    color={"#2271D1"}
                    referencia={refDescripcion} />
                <DivEstilizado>
                    <ButtonForm nombre={"Guardar"} color={"#2271D1"} colorBg={true} sombra={true} />
                    <ButtonForm nombre={"Limpiar"} type={"reset"} />
                </DivEstilizado>
            </FormEstilizado >

        </>

    )
}

export default FormModal