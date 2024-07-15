import Button from '../Buttons/Buttos'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="Header">
                <img src="/img/logoMain.png" alt="logo de Alura" />
                <div className='container-buttons'>
                    <Button nombre={"Home"} link={"/"} />
                    <Button nombre={"Nuevo video"} link={"/nuevo-video"} />
                </div>
            </header>

        </>
    )
}

export default Header