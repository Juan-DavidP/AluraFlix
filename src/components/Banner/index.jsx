import styles from './Banner.module.css'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.capa}></div>
            <div className={styles.container}>
                <div className={styles.containerInfo}>
                    <button className={styles.button}>FRONT END</button>
                    <p className={styles.titlte}>Challenge React</p>
                    <p className={styles.info}>
                        Este challenge es una forma de aprendizaje.
                        Es un mecanismo donde podrás comprometerte en la resolución de
                        un problema para poder aplicar todos los conocimientos adquiridos
                        en la formación React.
                    </p>
                </div>
                <img src="/img/imagenBanner.png" alt="Banner" width={1200} height={300} />
            </div>
        </section>
    )
}

export default Banner

