# daletusentido
versión 2
# [Nombre del Proyecto]
> Proyecto Dale tu sentido
## Integrantes-[Nombre 1]-[Nombre 2]-[Nombre 3]
## Descripción
En esta nueva version del proyecto se realizo una actualizacion a la apariencia de la web rehaciendola.

## Evolutivos implementados
Se implementan los evolutivos 
E1 Validación de formulario en JS
Este punto busca valdiar los campos de el formulario de contacto bootstrap (Realizado en evaluacion anterior)
E2 Consumo de APIpública con fetch
Se utiliza una api publica para la seccion de "usuarios" y para "listado de productos" se hizo uso de un listado en js el cual es llamado mediante metodo fetch
E4 Persistencia con localStorage
Para realizar este punto y lograr una persistencia en localStorage se crea la opcion de dark mode y light mode. Los cuales se encuentran en la barra de navegacion de la web
E5 Componente interactivo
Componentes de hero y slider-wrapper se ralizan enteramente con javascript. Se puede validar esto quitando la libreria de boostrap la cual esta solo para aplicar formato al formulario de contacto

E6 Mejoras de calidad 
Se trata de ralizar una mejora en la preformance en rama feature/lighthouse-iac. En la cual se impllementa lazy loading, se convierten las imagenes a formato webp. Reduciendo el tamaño de los recursos significativamente, pero no se logra subir el preformance.

## Decisiones técnicas
1-Flujo de Interacción / Blog: La necesidad de simular un módulo interactivo (como publicaciones, bitácoras o novedades) sin incurrir en la sobrecarga y los costos de infraestructura que implica configurar una base de datos operativa únicamente para pruebas de integración.

2-Catálogo Comercial Propio: Estructurar de manera formal el inventario específico de la tienda, seleccionando sólo unos productos de prueba para realizar el ejercicio 
## Demo-Sitio desplegado: [URL de GitHub Pages si aplica]-Capturas:

![alt text](web.png)
## Cómo correr localmente
git clone https://github.com/eaninir/daletusentido.git
abrir proyecto en visual studio code
utilizar extension live server para correr localmente
## Estructura del proyecto
```
C:.
│   .gitignore.txt
│   bdproductos.json
│   catalogo-insumos.html
│   catalogo-padre.html
│   catalogo.html
│   index.html
│   LICENSE
│   listado.html
│   README.md
│   usuarios.html
│
└───assets
    │   app.json
    │   bdproductos.json
    │   index.js
    │
    ├───css
    │       style.css
    │
    ├───img
    └───js
            script.js
```
## Stack
← Eventos y JS propio- HTML5 semántico- Bootstrap 5 (vía CDN)- CSS custom propio (paleta, tipografía, ajustes)- JavaScript vanilla