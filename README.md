# Portfolio | Matías Germán Gómez

Portfolio personal de una sola página donde muestro mis proyectos, experiencia, formación y habilidades como desarrollador de software.

## Tecnologías

- React 18
- Vite
- Tailwind CSS 4

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Después abrí `http://localhost:5173` en el navegador.

## Cómo actualizar el contenido

Todo el contenido de la web está en `src/data/portfolio.js`. Para sumar un proyecto o cambiar un dato, editá ese archivo. No hace falta tocar los componentes.

Cada proyecto acepta un link `demo` a su versión publicada y una captura `image` guardada en `public/projects/`. Si quedan vacíos, la web no los muestra.

Para actualizar el CV descargable, reemplazá `public/CV_Matias_German_Gomez.pdf`.

## Estructura

```
src/
  components/   Secciones de la página (Hero, Proyectos, Experiencia, etc.)
  data/         Contenido del portfolio
  App.jsx       Orden de las secciones
public/         Archivos estáticos, como el CV en PDF
```

## Contacto

- Email: matiasggomez2001@gmail.com
- GitHub: [Matias-G-Gomez](https://github.com/Matias-G-Gomez)
