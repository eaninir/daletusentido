// Asegúrate de que la ruta coincida desde donde se ejecuta el HTML
fetch('bdproductos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo encontrar el archivo JSON local');
    }
    return response.json();
  })
  .then(data => {
    const postsContainer = document.getElementById('posts');
    
    // Limpiamos el contenedor por si acaso
    postsContainer.innerHTML = ''; 

    // Usamos un fragmento en memoria para no estresar al navegador pintando uno por uno
    const fragment = document.createDocumentFragment();

    data.forEach(producto => {
      const li = document.createElement('li');
      let precioFormateado = Number(producto.precio).toLocaleString('es-CL');
      
      // Construimos el contenido de forma segura
      li.innerHTML = `<strong>[${producto.codigo}]</strong> ${producto.descripcion} - $${precioFormateado}`;
      
      fragment.appendChild(li);
    });
    
    // Pintamos todo el bloque de una sola vez en el DOM
    postsContainer.appendChild(fragment);
  })
  .catch(error => console.error('Hubo un error al cargar los productos:', error));