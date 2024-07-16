/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Crear Cuenta

export const useCrearCuenta = () => {
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      cuenta: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      passwordconfirmacion: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const {
        cuenta,
        nombre,
        apellido,
        email,
        password,
        passwordconfirmacion,
      } = values;
      setLoading(true);
      try {
        const respuesta = await fetch(`${baseURL}/crearCuenta`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            memb_name: nombre,
            apellido: apellido,
            memb___id: cuenta,
            memb__pwd: password,
            passwordconfirmacion: passwordconfirmacion,
            email: email,
          }),
        });
        const resultado = await respuesta.json();
        setMensajeExito("Cuenta creada con exito, revisa tu email");
        resetForm();
        if (!respuesta.ok) {
          throw new Error(resultado.mensaje);
        }
      } catch (error) {
        setMensajeError(error.message);
        setMensajeExito("");
      }
      setLoading(false);
    },
  });

  return { formik, mensajeExito, mensajeError, loading };
};

// RecuperarCuenta

export const useRecuperarCuenta = () => {
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const formik = useFormik({
      initialValues: {
        email: "",
        IDUnico: "",
        memb___id: "",
      },
      onSubmit: async (values) => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `${baseURL}/recuperarCuenta`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );
  
          if (!response.ok) {
            throw new Error("Hubo un error al recuperar la cuenta");
          }
  
          const result = await response.json();
          setMensaje(result.mensaje);
        } catch (error) {
          setMensaje(error.message);
        } finally {
          setIsLoading(false);
        }
      },
    });
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCargando(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return {
      cargando,
      mensaje,
      isLoading,
      formik,
    };
  };



  // Login


  export const useLogin = () => {
    const [cargando, setCargando] = useState(true);
    const [mensajeError, setMensajeError] = useState("");
    const { iniciarSesion } = useAuth();
    const navigate = useNavigate();
  
    const formik = useFormik({
      initialValues: { memb___id: "", memb__pwd: "" },
      onSubmit: async (values) => {
        const { memb___id, memb__pwd } = values;
        try {
          const respuesta = await fetch(`${baseURL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              memb___id,
              memb__pwd,
            }),
          });
  
          const data = await respuesta.json();
  
          if (respuesta.ok && data.token) {
            iniciarSesion(data.token, memb___id);
            const decodedToken = jwtDecode(data.token);
            const accountLevel = decodedToken.AccountLevel;
  
            if (accountLevel === 0) {
              navigate('/MiCuenta');
            } else if (accountLevel === 3) {
              navigate('/Admin');
            } else {
              navigate('/Login');
            }
          } else {
            throw new Error(data.mensaje || "Error desconocido");
          }
        } catch (error) {
          setMensajeError(error.message);
        }
      },
    });
  
    useEffect(() => {
      const timerCarga = setTimeout(() => {
        setCargando(false);
      }, 3000);
  
      return () => clearTimeout(timerCarga);
    }, []);
  
    return {
      cargando,
      mensajeError,
      formik,
    };
  };

      // CAMBIAR CONTRASEÑA

  export const useCambiarContraseña = () => {
    const [cargando, setCargando] = useState(true);
    const [mensajeExito, setMensajeExito] = useState("");
    const [mensajeError, setMensajeError] = useState("");
    const { cerrarSesion } = useAuth();
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
  
    const formik = useFormik({
      initialValues: { nuevopassword: "", confirmarpassword: "" },
      onSubmit: async (values) => {
        const { nuevopassword, confirmarpassword } = values;
        try {
          const response = await fetch(`${baseURL}/cambiarPassword`, {
            method: "POST",
            headers: {
              "Content-Type": "application/JSON",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              nuevopassword,
              confirmarpassword,
            }),
          });
  
          const resultado = await response.json();
  
          if (!response.ok) {
            throw new Error(resultado.mensaje);
          }
  
          setMensajeExito(resultado.mensaje);
          setMensajeError("");
          setTimeout(() => {
            cerrarSesion();
            navigate("/Login");
          }, 3000);
        } catch (error) {
          setMensajeError(error.message);
        }
      },
    });
  
    useEffect(() => {
      if (!token) {
        navigate("/Login");
      }
    }, [navigate, token]);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCargando(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return {
      cargando,
      mensajeExito,
      mensajeError,
      formik,
    };
  };


  export const useEditarNoticia = () => {
    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState("");

    const fetchNoticiaEdicion = async () => {
      const response = await fetch(`${baseURL}/obtenerNoticia/${id}`);
      const data = await response.json();
      return data;
    };
  
    const formik = useFormik({
      initialValues: {
        fecha: "",
        titulo: "",
        subtitulo: "",
        autor: "",
        contenido: ""
      },
      onSubmit: async (values) => {
        try {
          const respuesta = await fetch(`${baseURL}/editarNoticia/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
  
          const resultado = await respuesta.json();
          setMensaje(resultado.mensaje);
        } catch (error) {
          console.error(error);
        }
      },
      enableReinitialize: true,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        const datos = await fetchNoticiaEdicion();
        formik.setValues(datos);
        setCargando(false);
      };
  
      fetchData();

    }, [id]);
  
    return {
      cargando,
      mensaje,
      formik,
    };
  };
