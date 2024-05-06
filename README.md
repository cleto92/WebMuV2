Descripción del Proyecto
Esta aplicación web proporciona a los jugadores de Mu Online una plataforma completa para gestionar sus cuentas y personajes, así como funcionalidades adicionales para la administración del servidor.

Sección de Usuarios
Funcionalidades Adicionales:
Resetear Personaje: Los usuarios tienen la capacidad de resetear sus personajes para comenzar desde cero, manteniendo su progreso general.
Mover Personajes: Los usuarios pueden transferir sus personajes entre diferentes cuentas o servidores según sea necesario.
Agregar Puntos: Permite a los usuarios agregar puntos a sus personajes para mejorar sus habilidades y estadísticas.
Borrar PK (Asesinos): Los usuarios pueden eliminar el estado de asesino (PK) de sus personajes.

Sección de Administrador
Funcionalidades Avanzadas:
Crear, Editar y Borrar Noticias: El administrador puede gestionar el contenido de noticias del servidor utilizando una base de datos MongoDB exclusivamente para esta funcionalidad, lo que permite una gestión dinámica y eficiente de la información.
Editar Personajes: El administrador tiene la capacidad de editar los atributos y características de los personajes según sea necesario.
Agregar Items: Permite al administrador agregar nuevos ítems al juego, ampliando así la variedad de objetos disponibles para los jugadores.
Agregar Items en las cuentas de los usuarios: El administrador puede otorgar objetos específicos a las cuentas de los usuarios para eventos especiales o recompensas.
Bloquear Personajes: El administrador puede bloquear temporalmente personajes problemáticos o infractores de las reglas del servidor.

Tecnologías Utilizadas
Frontend con React y TailwindCSS: El frontend de la aplicación se ha desarrollado utilizando React para crear componentes interactivos y dinámicos, mientras que TailwindCSS se ha utilizado para el diseño y estilizado eficiente de la interfaz de usuario.
Backend con Node.js y Express: El backend se ha construido utilizando Node.js y Express para manejar las solicitudes del cliente y realizar operaciones en la base de datos.
Base de Datos MongoDB: Se utiliza MongoDB para almacenar y gestionar las noticias del servidor, proporcionando una solución flexible y escalable para la gestión del contenido dinámico.

Seguridad
Autenticación y Autorización: Se implementan mecanismos de autenticación y autorización para garantizar que las funcionalidades administrativas solo estén disponibles para usuarios autorizados.
