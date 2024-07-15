const baseURL = import.meta.env.VITE_API_BASE_URL

export const getObtenerPersonajesRanking = async () => {
    try {
        const respuesta = await fetch(`${baseURL}/obtenerUserReset`)
        const resultado = await respuesta.json()
        return resultado.usuariosReset
    } catch (error) {
        console.log(error)
    }
}


export const getObtenerClanesRanking = async () => {
    try {
        const respuesta = await fetch(`${baseURL}/obtenerClanes`)
        const resultado = await respuesta.json()
        return resultado.clanes
    } catch (error) {
        console.log(error)
    }
}