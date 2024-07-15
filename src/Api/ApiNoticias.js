const baseURL = import.meta.env.VITE_API_BASE_URL;

export const getObtenerTodasNoticias = async () => {
  try {
    const respuesta = await fetch(`${baseURL}/obtenerNoticias`);
    if (!respuesta) {
      throw new Error("No se pudo obtener la noticia");
    }
    const resultado = await respuesta.json();
    const ordenarNoticias = resultado.sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaB - fechaA;
    });
    return ordenarNoticias;
  } catch (error) {
    console.log(error);
  }
};

export const getObtenerNoticia = async (id) => {
  try {
    const respuesta = await fetch(`${baseURL}/obtenerNoticiaId/${id}`);
    if (!respuesta) {
      throw new Error("No se pudo obtener la noticia");
    }
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const getObtenerNoticiaEdicion = async (id) => {
  try {
    const respuesta = await fetch(`${baseURL}/editarNoticia/${id}`);
    if (!respuesta) {
      throw new Error("Error al obtener la noticia");
    }
    const resultado = respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const getNoticia = async () => {
  try {
    const respuesta = await fetch(`${baseURL}/obtenerNoticias`);
    if (!respuesta) {
      throw new Error("Error al obtener la noticia");
    }
    let noticia = await respuesta.json();
    return noticia;
  } catch (error) {
    console.error("Error al obtener la noticia", error);
    throw error;
  }
};


export const obtenerNoticiaPanelAdmin = async () => {
    try {
        const respuesta = await fetch(`${baseURL}/obtenerNoticias`)
        if(!respuesta) {
            throw new Error("Error al obtener la noticia")
        }
        const resultado = await respuesta.json()
        return resultado
    } catch (error) {
        console.log("Error 500", error)
    }
}
