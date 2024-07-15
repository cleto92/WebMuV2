const baseURL = import.meta.env.VITE_API_BASE_URL

// Cuenta

export const getObtenerPersonajesCuenta = async (accountID) => {
        try {
            const respuesta = await fetch(`${baseURL}/obtenerPersonajesCuenta/${accountID}`)
            const resultado = await respuesta.json()
            return resultado.personajes
        } catch (error) {
            console.log(error)
        }
}


// Estadisticas


export const getServerEstado = async () => {
    try {
      const respuesta = await fetch(
        `${baseURL}/estado-servidor`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      const resultado = await respuesta.json();
      return resultado.estado === "online" ? "ONLINE" : "OFFLINE";
    } catch (error) {
      console.error(error);
      return "OFFLINE";
    }
  };
  
  export const getObtenerPersonajes = async () => {
    try {
      const respuesta = await fetch(
        `${baseURL}/obtenerPersonajes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      const resultado = await respuesta.json();
      return resultado.personajes;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getObtenerUsuarios = async () => {
    try {
      const respuesta = await fetch(
        `${baseURL}/usuariosOnlineSlow`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      const resultado = await respuesta.json();
  
      return resultado.cantidad;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getObtenerCuentas = async () => {
    try {
      const respuesta = await fetch(
        `${baseURL}/ObtenerCuentas`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );
      const resultado = await respuesta.json();
      return resultado.cuentas
    } catch (error) {
      console.log(error);
    }
  };



  // Noticias 

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
  

  // Ranking

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