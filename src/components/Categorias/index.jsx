import styles from './Categorias.module.css'

const Categorias = ({ nombre, color, children, }) => {

    return (
        <div className={styles.container}>
            <div className={styles.categoria}>
                <p className={styles.nombreCategoria} style={{ backgroundColor: color }}>{nombre}</p>
            </div>
            <div className={styles.cards}>
                {children}
            </div>
        </div>
    )
}

export default Categorias