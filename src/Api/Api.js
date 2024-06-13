/* eslint-disable no-unused-vars */
import {useFormik} from 'formik'
import { useState } from 'react'



// Crear Cuenta

export const useCrearCuenta = () => {
    const [mensajeExito, setMensajeExito] = useState("")
    const [mensajeError, setMensajeError] = useState("")
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            cuenta: "",
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            passwordconfirmacion: "",
        },
        onSubmit: async (values, {resetForm}) => {
            setLoading(true)
            try {
                
             const respuesta = await fetch("https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/crearCuenta", {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    memb_name: values.nombre,
                    apellido: values.apellido,
                    memb___id: values.cuenta,
                    memb__pwd: values.password,
                    passwordconfirmacion: values.passwordconfirmacion,
                    email: values.email
                })
             })
             const resultado = await respuesta.json()
             setMensajeExito("Cuenta creada con exito, revisa tu email")
             resetForm()
             if(!respuesta.ok) {
                throw new Error(resultado.mensaje)
             }

            } catch (error) {
                setMensajeError(error.message);
                setMensajeExito("");
            }
            setLoading(false);
        } 
    })

    return {formik, mensajeExito, mensajeError, loading}
}