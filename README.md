# Networking 

Se desarrolla una app web donde los usuarios encontraran diferentes compañias con la funcionalidad de **filtrar** por tipo de industria.

La información de las compañias son: 
- Nombre
- Fecha de fundación
- Industria
- Tamaño
- Website 

## Calidad de código: 
 [![CodeFactor](https://www.codefactor.io/repository/github/jnataliaramirez/jobmadrid-networking/badge)](https://www.codefactor.io/repository/github/jnataliaramirez/jobmadrid-networking)

## Background 
Este proyecto es un ejercicio práctico para participar en la hackathon JOBMadrid 2021. 

## Recomendaciones
- Quizas tu navegador nuestre una pantalla en blanco, esto es porqué la API, esta teniendo problemas, te aparecerá un problema: cross-domain request. Te recomiendo instalar en google Chrome esta extension [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) y ya podras ver todo el contenido. 

## Stack 
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
: Esta tecnologia fue utilizada para prácticar y reforzar lo estudiado en JavaScript, es interesante programar con JavaScript Vanilla porqué haces una programación imperativa y si dominas js cualquier framework nuevo será más fácil de aprender. (y tambien me gusta 💜 React )

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
: Maquetación de la web

![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
: Dar estilos a la pág.

![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
: Framework CSS para facilitar la utilización de CSS y hacerlo de manera más práctica. 

![](https://img.shields.io/badge/gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)
: Sistema de compilación de transmisión en el desarrollo web front-end.

![](https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=61DAFB)
: Facilita la gestión de paquetes por defecto de Node.js

![](https://img.shields.io/badge/Git-F74E27?style=for-the-badge&logo=git&logoColor=white)
: Control de versiones. 

## Historias 
- [x] Task 1 → Puedo ver la barra superior con el botón de filter y las chips de filtro (botones con cada uno de los nombres de industria que se encuentran en la lista de compañías del enunciado) 

- [x] Task 2 → Si no hay ninguna chip de filtro seleccionada puedo ver la lista completa de compañías

- [x] Task 3 → Al seleccionar un filtro, se ven únicamente las empresas que contienen ese filtro

- [x]  Task 4 → Al hacer click en website me lleva a una página externa

- [x] Task 5 → La card de cada empresa contiene la siguiente información: Nombre, Año, Industria, Tamaño, Link a la web

## Instalación
> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

*Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:*

1. **Clona esta repositorio desde GitHub**.
1. **Abre una terminal** en la carpeta raíz del repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

**Pasos para arrancar el proyecto:**

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez desees verlo desde tu computador** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de tu navegador y muestra la página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en el navegador**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Si deseas editar mi evaluación después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

**Para generar mi página para producción ejecute el comando:**

```bash
npm run docs
```
Y a continuación:

1. Subi a mi repositorio la carpeta `docs/` que se te acaba de generar.
1. Entre en la pestaña `settings` de mi repositorio b.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
1. Y ya está

Tal vez quieras cojer el código de este ejercicio entonces estas en libertad de hacer los mismos pasos que hice yo para tu repo. Recuerda que deberias copiarlo (descargarlo como un zip) y no clonarlo si es lo que deseas. 

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

## Estructura de carpetas 
En la carpeta src es donde se van a modificar los archivos:
```
src
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ 01.variables.js
 |  ├─02-fetch.js
 |  └─ ... .js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

## Contactame 
[<img src="https://raw.githubusercontent.com/Raymo111/Raymo111/master/socials/linkedin.png" height="30em" align="center" alt="Follow jnataliaramirez on LinkedIn" title="Follow jnataiaramirez on LinkedIn"/>](https://linkedin.com/in/jnataliaramirez) [<img src="https://raw.githubusercontent.com/Raymo111/Raymo111/master/socials/twitter.svg" height="30em" align="center" alt="Follow jnataliaramirez on Twitter" title="Follow jnataliaramirez on Twitter"/>](https://twitter.com/jnataliaramirez)

## Reconocimientos 

Para realizar este ejercicio con Gulp y Node.js tome como base el [Web Starter Kit de Adalab](https://github.com/adalab/adalab-web-starter-kit)

## License 

[MIT](https://opensource.org/licenses/MIT)


