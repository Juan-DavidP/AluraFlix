import ButtonNavegacion from './ButtonNavegacion'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="Header">
                <img src="/img/logoMain.png" alt="logo de Alura" />
                <div className='container-buttons'>
                    <ButtonNavegacion nombre={"Home"} link={"/"} />
                    <ButtonNavegacion nombre={"Nuevo video"} link={"/nuevo-video"} />
                </div>
            </header>

        </>
    )
}

export default Header