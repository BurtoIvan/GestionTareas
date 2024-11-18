let tareas = [];

function crearTarea() {
    const titulo = prompt("Título de la tarea:");
    const descripcion = prompt("Descripción de la tarea:");
    const tarea = {
        id: Date.now(),
        titulo,
        descripcion,
        estado: "No Completada",
        fecha_creacion: new Date().toLocaleString(),
    };
    tareas.push(tarea);
    mostrarTareas();
}

function mostrarTareas() {
    const lista = document.getElementById("lista-tareas");
    lista.innerHTML = "";
    tareas.forEach(tarea => {
        const tareaElem = document.createElement("div");
        tareaElem.textContent = `${tarea.titulo} - ${tarea.estado}`;
        lista.appendChild(tareaElem);
    });
}

mostrarTareas();
