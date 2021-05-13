
# Portfolio Arantxa Delgado Ruiz, desarrolladora front end junior


## Arranque del proyecto:

- npm install: Para instalar las dependencias
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run build/mv build docs: Para publicar el proyecto a producción
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">




### Descripción

Realización de un portfolio personal para la presentación de proyectos:

	• Uso de Sass y Ness.css (https://nostalgic-css.github.io/NES.css/) para los estilos
	• Uso de React y Typescript para la estructuración del JS de la aplicación
	• Uso de mediaqueries para que el diseño sea adaptable al dispositivo
	• Desarrollo usando la estrategia mobile first
	• Uso de git para el control de versiones del proyecto, con ramas.
	• Uso de react-router para navegar en la página entre las secciones de contacto, proyectos e inicio.

Para la realización de este proyecto se han seguido las siguientes fases:

	• Diseño de la apariencia del portfolio y organización de contenidos en secciones.
	• Desarrollo del código JS dentro de React para las funcionalidades requeridas en el portfolio.
	• Maquetación de la web.

	
#### Landing


![Landing](https://user-images.githubusercontent.com/70486185/118110615-ecb1fb00-b3e2-11eb-92b0-1873563d469a.png)




#### Proyectos


![Projects](https://user-images.githubusercontent.com/70486185/118110690-05baac00-b3e3-11eb-91e9-1a41f31c5087.png)


#### Sobre mí


![Aboutme](https://user-images.githubusercontent.com/70486185/118110780-1ec35d00-b3e3-11eb-8017-90eaf1ac655c.png)


#### Contacto

![Contact](https://user-images.githubusercontent.com/70486185/118111262-c0e34500-b3e3-11eb-8b07-8c72ac61da1a.png)




## Estructuración del código:

```
src
 ├─ assets
 ├─ components
 |  ├─ AboutMe
 |  |   ├─aboutme.scss
 |  |   ├─Aboutme.tsx
 |  |
 |  ├─ Buttons
 |  |   ├─backBtn
 |  |   |    ├─Back.tsx 
 |  |   ├─landingBtn
 |  |        ├─LandingButton.tsx
 |  |
 |  ├─Contact
 |  |   ├─contact.scss
 |  |   ├─Contact.tsx
 |  ├─Footer
 |  |   ├─footer.scss
 |  |   ├─Footer.tsx
 |  ├─Landing
 |  |   ├─landing.scss
 |  |   ├─Landing.tsx
 |  ├─Projects
 |  |   ├─Project
 |  |   |   ├─project.scss
 |  |   |   ├─Project.tsx
 |  |   ├─projects.scss
 |  |   ├─Projects.tsx
 ├─ data
 |  ├─projects.json 
 ├─ styles
 |  ├─App.scss
 |  ├─index.scss
 |  ├─variables.scss
 ├─ App.tsx
 ├─ index.tsx
 ├─ react-app-env.d.ts
 


```




  
