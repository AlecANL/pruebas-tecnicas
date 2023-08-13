# Aplicación de Libros en React con TypeScript
Esta es una aplicación de ejemplo desarrollada en React utilizando TypeScript, ESLint, PNPM y Vite.js. La aplicación permite a los usuarios visualizar una lista de libros disponibles, crear una lista de lectura, filtrar libros por género y realizar cambios que se sincronizan en tiempo real entre pestañas sin necesidad de un backend. También incluye persistencia de datos y una prueba unitaria.

### Requisitos
* Node.js (versión X.X.X)
* PNPM (instalación global)
* Navegador web moderno

### Instrucciones de Uso
Clona el repositorio:

* git clone `https://github.com/AlecANL/pruebas-tecnicas`
* cd ``tú-repositorio``
* Instala las dependencias: ```pnpm install```
* Utiliza el script ```pnpm dev``` para iniciar el servidor de desarrollo
* esta disponible en ``http://localhost:3000``

### Prueba la Aplicación:
Abre tu navegador y navega a http://localhost:3000 para probar la aplicación.

### Funcionalidad
* **Visualización de Libros Disponibles:**
La aplicación muestra una lista de libros disponibles que los usuarios pueden revisar.

* **Creación de Lista de Lectura:**
Los usuarios pueden crear una lista de lectura a partir de los libros disponibles. La interfaz de usuario distingue claramente entre los libros en la lista de lectura y los que no lo están. También es posible mover libros de la lista de lectura a la lista de disponibles.

* **Filtrado de Libros por Género:**
Los usuarios pueden filtrar la lista de libros disponibles por género. Un contador muestra el número de libros disponibles, el número en la lista de lectura y el número disponibles en el género seleccionado.

* **Sincronización de Estado:**
La aplicación mantiene un estado global sincronizado que refleja el número de libros en la lista de lectura y disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, los recuentos se actualizan automáticamente.

* **Persistencia de Datos:**
Los datos de la lista de lectura se almacenan en el almacenamiento local del navegador. Al recargar la página, la lista de lectura persiste.

* **Sincronización entre Pestañas**
Los cambios realizados en una pestaña se reflejan en otras pestañas abiertas, sin necesidad de un backend.

### Prueba Unitaria
La aplicación incluye una prueba unitaria importante para asegurar el funcionamiento correcto. Ejecuta la prueba con el siguiente comando:

### Despliegue
La aplicación está desplegada en Vercel y se puede acceder a través de la siguiente URL: ``https://tu-app.vercel.app``

