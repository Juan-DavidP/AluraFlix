async function obtenerVideos() {
    const conexion = await fetch('http://localhost:8000/videos')
    const conexionConvertida = conexion.json()

    return conexionConvertida;
}