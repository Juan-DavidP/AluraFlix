import styled from "styled-components"
import ButtonForm from "./ButtonForm"
import Label from "../../Label"
import Input from "../../Input"
import Select from "../../Select"
import TextArea from "../../TextArea"

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

const categorias = ["frontend", "backend", "innovación y gestión"]

const FormModal = () => {
    return (
        <>
            <FormEstilizado action="" method="get">
                <Label titulo={"Título"} />
                <Input placeholder={"¿qué es javascript?"} color={"#2271D1"} />

                <Label titulo={"Categoria"} />
                <Select placeholder="¿qué es javascript?" color={"#2271D1"}
                    colorBg={"#03122F"}>
                    {categorias.map((categoria, index) => <option
                        key={index} value={categoria}> {categoria} </option>)}
                </Select>

                <Label titulo={"Imagen"} />
                <Input
                    placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
                    color={"#2271D1"} />

                <Label titulo={"Video"} />
                <Input
                    placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
                    color={"#2271D1"} />

                <Label titulo={"Descripción"} />
                <TextArea
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    color={"#2271D1"} />
                <DivEstilizado>
                    <ButtonForm nombre={"Guardar"} color={"#2271D1"} colorBg={true} sombra={true} />
                    <ButtonForm nombre={"Limpiar"} type={"reset"} />
                </DivEstilizado>
            </FormEstilizado>

        </>

    )
}

export default FormModal