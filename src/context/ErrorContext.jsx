import { createContext } from "react";

export const ErrorContext = createContext();

const ErrorContextProvaider = ({ children }) => {

    function verificarCampos(campos) {
        let camposCompletados = true
        for (let index = 0; index <= 4; index++) {
            if (campos.current[index].value.length <= 0) {
                campos.current[index].style.border = 'solid 2px red';
                campos.current[index].style.setProperty(
                    '--placeholder-color', 'red'
                )
                campos.current[index].placeholder = `El campo ${campos.current[index].name.toLowerCase()}  es obligatorio`
                camposCompletados = false
            }
            else {
                campos.current[index].style.border = '2px solid #A5A5A5';
                campos.current[index].style.setProperty(
                    '--placeholder-color', '#A5A5A5'
                )
            }
        }
        return camposCompletados
    }

    return (
        <ErrorContext.Provider value={{ verificarCampos }}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorContextProvaider