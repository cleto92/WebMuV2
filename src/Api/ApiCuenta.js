const baseURL = import.meta.env.VITE_API_BASE_URL


export const getObtenerPersonajesCuenta = async (accountID) => {
        try {
            const respuesta = await fetch(`${baseURL}/obtenerPersonajesCuenta/${accountID}`)
            const resultado = await respuesta.json()
            return resultado.personajes
        } catch (error) {
            console.log(error)
        }
}