# Portfolio Arantxa Delgado Ruiz, desarrolladora front end 

## Arranque del proyecto:

- Para instalar las dependencias 
```
# npm install
```


- Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
```
# npm start
```


- Para publicar el proyecto a producción 
```
# npm run build
```

### Tecnologías

- [React] (https://es.reactjs.org/)
    - [React-Router-Dom] (https://reactrouter.com/web/guides/quick-start)
- [Nes.css] (https://nostalgic-css.github.io/NES.css/)
- [Git] (https://git-scm.com/)

Para la realización de este proyecto se han seguido las siguientes fases:

- Diseño de la apariencia del portfolio y organización de contenidos en secciones.
- Desarrollo del código JS dentro de React para las funcionalidades requeridas en el portfolio.
- Maquetación de la web.

#### Landing

![Landing](https://user-images.githubusercontent.com/70486185/118110615-ecb1fb00-b3e2-11eb-92b0-1873563d469a.png)


#### Sobre mí

![Aboutme](https://user-images.githubusercontent.com/70486185/118799956-a60b4780-b89f-11eb-9d27-485a344dac8c.png)


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
