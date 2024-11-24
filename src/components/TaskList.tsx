import React, { useMemo } from 'react';
import { useTaskStore } from '../store/taskStore';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC = () => {
  const { tareas } = useTaskStore();

  const tareasOrdenadas = useMemo(() => {
    return [...tareas].sort((a, b) => {
      // Primero por prioridad
      const prioridadOrden = { alta: 0, media: 1, baja: 2 };
      if (prioridadOrden[a.prioridad] !== prioridadOrden[b.prioridad]) {
        return prioridadOrden[a.prioridad] - prioridadOrden[b.prioridad];
      }
      // Luego por fecha límite
      if (a.fechaLimite && b.fechaLimite) {
        return a.fechaLimite.getTime() - b.fechaLimite.getTime();
      }
      return 0;
    });
  }, [tareas]);

  if (tareas.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 bg-gray-800 rounded-lg">
        <p className="text-lg">No hay tareas pendientes</p>
        <p className="text-sm mt-2">¡Comienza agregando una nueva tarea!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tareasOrdenadas.map((tarea) => (
        <TaskItem key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};