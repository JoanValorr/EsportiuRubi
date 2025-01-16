// Función para cargar las noticias en el index y mostrar solo las últimas 5
async function cargarUltimasNoticias() {
    try {
        const response = await fetch('json/noticias.json');
        if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');

        const noticias = await response.json();
        const ultimasNoticias = noticias.slice(-6); // Últimas 5 noticias
        const contenedorNoticias = document.getElementById('noticias');
        if (contenedorNoticias) {
            contenedorNoticias.innerHTML = '';
            ultimasNoticias.forEach(noticia => {
                const noticiaDiv = document.createElement('div');
                noticiaDiv.classList.add('noticia');
                noticiaDiv.innerHTML = `
                    <h2>${noticia.titulo}</h2>
                    <p><small>${noticia.fecha}</small></p>
                    <p>${noticia.contenido}</p>
                `;
                contenedorNoticias.prepend(noticiaDiv); // Usar prepend en lugar de appendChild
            });
        }
    } catch (error) {
        console.error('Error cargando las noticias:', error);
    }
}

// Función para cargar todas las noticias en noticias.html
async function cargarTodasLasNoticias() {
    try {
        const response = await fetch('json/noticias.json');
        if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');

        const noticias = await response.json();
        const contenedorTodasLasNoticias = document.getElementById('todas-las-noticias');
        if (contenedorTodasLasNoticias) {
            contenedorTodasLasNoticias.innerHTML = '';
            noticias.forEach(noticia => {
                const noticiaDiv = document.createElement('div');
                noticiaDiv.classList.add('noticia');
                noticiaDiv.innerHTML = `
                    <h2>${noticia.titulo}</h2>
                    <p><small>${noticia.fecha}</small></p>
                    <p>${noticia.contenido}</p>
                `;
                contenedorTodasLasNoticias.prepend(noticiaDiv); // Usar prepend en lugar de appendChild
            });
        }
    } catch (error) {
        console.error('Error cargando las noticias:', error);
    }
}

// Determinar qué función ejecutar según la página
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('noticias')) {
        cargarUltimasNoticias();
    } else if (document.getElementById('todas-las-noticias')) {
        cargarTodasLasNoticias();
    }
});
