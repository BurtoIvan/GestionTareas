let tareas = [];

// Cargar las tareas almacenadas al inicio
cargarTareas();

function crearTarea() {
    const titulo = prompt("Título de la tarea:");
    const descripcion = prompt("Descripción de la tarea:");
    if (titulo && descripcion) {
        const tarea = {
            id: Date.now(),
            titulo,
            descripcion,
            estado: "No Completada",
            fecha_creacion: new Date().toLocaleString(),
        };
        tareas.push(tarea);
        guardarTareas();
        mostrarTareas();
    }
}

function mostrarTareas() {
    const lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    tareas.forEach(tarea => {
        const tareaElem = document.createElement("div");
        tareaElem.className = "tarea";
        if (tarea.estado === "Completada") {
            tareaElem.classList.add("completada");
        }
        
        tareaElem.innerHTML = `
            <span>${tarea.titulo} - ${tarea.estado}</span>
            <div>
                <button onclick="marcarComoCompletada(${tarea.id})">Completar</button>
                <button onclick="editarTarea(${tarea.id})">Editar</button>
                <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
            </div>
        `;
        lista.appendChild(tareaElem);
    });
}

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) {
        tareas = tareasGuardadas;
        mostrarTareas();
    }
}

function marcarComoCompletada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.estado = "Completada";
        guardarTareas();
        mostrarTareas();
    }
}

function editarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        const nuevoTitulo = prompt("Nuevo título de la tarea:", tarea.titulo);
        const nuevaDescripcion = prompt("Nueva descripción de la tarea:", tarea.descripcion);
        if (nuevoTitulo && nuevaDescripcion) {
            tarea.titulo = nuevoTitulo;
            tarea.descripcion = nuevaDescripcion;
            guardarTareas();
            mostrarTareas();
        }
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareas();
    mostrarTareas();
}
