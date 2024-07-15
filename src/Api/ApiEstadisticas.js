const baseURL = import.meta.env.VITE_API_BASE_URL

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
