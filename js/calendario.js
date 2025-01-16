const partidos = [
    { fecha: "28-09-2024", equipo: "Frederic Mistral", rival: "Rubi CEFS ", hora: "18:00", resultado: "Empate 2-2" },

    { fecha: "05-10-2024", equipo: "Rubi CEFS", rival: "Terrasa FS", hora: "20:00", resultado: "Victoria 9-3" },

    { fecha: "19-10-2024", equipo: "Rubi CEFS", rival: "Ciutat de Mataró", hora: "18:00", resultado: "Victoria 4-2" },

    { fecha: "26-10-2024", equipo: "Montsant", rival: "Esportiu Rubí", hora: "18:00", resultado: "Victoria 2-6" },

    { fecha: "02-11-2024", equipo: "Esportiu Rubí", rival: "Prosperitat", hora: "18:00", resultado: "Victoria 8-5" },

    { fecha: "09-11-2024", equipo: "Union Santa Coloma", rival: "Rubi CEFS", hora: "18:00", resultado: "No jugado " },

    { fecha: "16-11-2024", equipo: "Rubi CEFS", rival: "Sant Quirze", hora: "19:00", resultado: "Derrota 2-7" },

    { fecha: "24-11-2024", equipo: "Malgrat", rival: "Rubi CEFS", hora: "17:45", resultado: "Victoria 0-5" },

    { fecha: "30-11-2024", equipo: "Rubi CEFS", rival: "Espanyol", hora: "17:45", resultado: "Victoria 8-4 " },
    
    { fecha: "14-12-2024", equipo: "Arenys de munt", rival: "Rubi CEFS", hora: "18:00", resultado: "Victoria 3-4" },

    { fecha: "21-12-2024", equipo: "Rubi CEFS", rival: "Montornes", hora: "17:45", resultado: "Victoria 8-4" },

    { fecha: "11-01-2025", equipo: "Olimpic Floresta", rival: "Rubi CEFS", hora: "18:00", resultado: "Derrota 8-3" },

    { fecha: "18-01-2025", equipo: "Rubi CEFS", rival: "Girona", hora: "17:45", resultado: "No Jugado" },

    { fecha: "25-01-2025", equipo: "Vilasar", rival: "Rubi CEFS", hora: "17:45", resultado: "No Jugado" },

    { fecha: "01-02-2025", equipo: "Rubi CEFS", rival: "Castellar", hora: "17:45", resultado: "No Jugado" },

    { fecha: "08-02-2025", equipo: "Rubi CEFS", rival: "Frederic Mistral", hora: "17:45", resultado: "No Jugado" },

    { fecha: "15-02-2025", equipo: "Terrassa FS", rival: "Rubi CEFS", hora: "17:45", resultado: "No Jugado" },

    { fecha: "23-02-2025", equipo: "Mataró", rival: "Rubi CEFS", hora: "11:45", resultado: "No Jugado" },

    { fecha: "01-03-2025", equipo: "Rubi CEFS", rival: "Montsant", hora: "17:45", resultado: "No Jugado" },

    { fecha: "08-03-2025", equipo: "Prosperitat", rival: "Rubi CEFS", hora: "18:30", resultado: "No Jugado" },

    { fecha: "05-03-2025", equipo: "Rubi CEFS", rival: "Union Santa Coloma", hora: "17:45", resultado: "No Jugado" },

    { fecha: "23-03-2025", equipo: "Sant Quirze", rival: "Rubi CEFS", hora: "18:00", resultado: "No Jugado" },

    { fecha: "29-03-2025", equipo: "Rubi CEFS", rival: "Malgrat", hora: "17:45", resultado: "No Jugado" },

    { fecha: "05-04-2025", equipo: "Espanyol", rival: "Rubi CEFS", hora: "17:00", resultado: "No Jugado" },

    { fecha: "12-04-2025", equipo: "Rubi CEFS", rival: "Arenys de Munt", hora: "17:45", resultado: "No Jugado" },
    
    { fecha: "26-04-2025", equipo: "Montornes", rival: "Rubi CEFS", hora: "19:00", resultado: "No Jugado" },

    { fecha: "03-05-2025", equipo: "Rubi CEFS", rival: "Olimpic Floresta", hora: "17:45", resultado: "No Jugado" },

    { fecha: "11-05-2025", equipo: "Girona", rival: "Rubi CEFS", hora: "17:00", resultado: "No Jugado" },

    { fecha: "17-05-2025", equipo: "Rubi CEFS", rival: "Vilasar", hora: "17:45", resultado: "No Jugado" },

    { fecha: "24-05-2025", equipo: "Castellar", rival: "Rubi CEFS", hora: "18:30", resultado: "No Jugado" },


];

// Obtener el contenedor de la lista
const partidosList = document.getElementById('partidos-list');

// Asegúrate de que el contenedor esté vacío antes de insertar los nuevos elementos
partidosList.innerHTML = '';  // Limpiar la lista en caso de que ya haya algo en el HTML

partidos.forEach(partido => {
    const li = document.createElement('li');
    li.classList.add('calendar-item');
    
    // Determinamos si el partido es victoria, derrota, empate o no jugado
    let resultadoClass = '';
    if (partido.resultado.toLowerCase().includes('victoria')) {
        resultadoClass = 'victoria';  // Clase para borde verde
    } else if (partido.resultado.toLowerCase().includes('derrota')) {
        resultadoClass = 'derrota';   // Clase para borde rojo
    } else if (partido.resultado.toLowerCase().includes('empate')) {
        resultadoClass = 'empate';   // Clase para borde amarillo
    } else if (partido.resultado.toLowerCase().includes('no jugado')) {
        resultadoClass = 'no-jugado';   // Clase para borde gris
    }

    // Agregar la clase de resultado (victoria/derrota/empate/no jugado)
    li.classList.add(resultadoClass);

    // Insertar el contenido del partido con estructura específica
    li.innerHTML = `
        <p class="fecha">${partido.fecha}</p>
        <div class="equipos">
            <p><strong>${partido.equipo}</strong> vs <strong>${partido.rival}</strong></p>
        </div>
        <p class="hora">${partido.hora}</p>
        <p class="resultado">${partido.resultado}</p>
    `;
    
    partidosList.appendChild(li);
});
