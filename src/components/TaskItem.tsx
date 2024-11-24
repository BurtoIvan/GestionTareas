import React from 'react';
import { Task } from '../types/Task';
import { useTaskStore } from '../store/taskStore';

interface TaskItemProps {
  tarea: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ tarea }) => {
  const { toggleTarea, eliminarTarea } = useTaskStore();

  const formatearFecha = (fecha: Date) => {
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPrioridadClase = (prioridad: string) => {
    const clases = {
      alta: 'bg-red-900/50 text-red-200 border-red-700',
      media: 'bg-yellow-900/50 text-yellow-200 border-yellow-700',
      baja: 'bg-green-900/50 text-green-200 border-green-700'
    };
    return clases[prioridad as keyof typeof clases] || '';
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleTarea(tarea.id)}
          className="mt-1.5 h-4 w-4 rounded border-gray-500 text-blue-600 focus:ring-blue-500"
        />
        
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <h3 className={`font-medium text-lg ${
              tarea.completada ? 'line-through text-gray-500' : ''
            }`}>
              {tarea.titulo}
            </h3>
            <button
              onClick={() => eliminarTarea(tarea.id)}
              className="text-red-400 hover:text-red-300 transition-colors"
              aria-label="Eliminar tarea"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {tarea.descripcion && (
            <p className="text-gray-400 text-sm mt-1">{tarea.descripcion}</p>
          )}
          
          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded text-sm border ${getPrioridadClase(tarea.prioridad)}`}>
              Prioridad {tarea.prioridad}
            </span>
            
            {tarea.fechaLimite && (
              <span className="px-2 py-1 rounded text-sm bg-blue-900/50 text-blue-200 border border-blue-700">
                Vence: {formatearFecha(tarea.fechaLimite)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};