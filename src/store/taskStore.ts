import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '../types/Task';

interface TaskStore {
  tareas: Task[];
  agregarTarea: (tarea: Omit<Task, 'id' | 'fechaCreacion'>) => void;
  eliminarTarea: (id: string) => void;
  toggleTarea: (id: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tareas: [],
      
      agregarTarea: (tarea) => set((state) => ({
        tareas: [...state.tareas, {
          ...tarea,
          id: crypto.randomUUID(),
          fechaCreacion: new Date(),
        }]
      })),

      eliminarTarea: (id) => set((state) => ({
        tareas: state.tareas.filter(tarea => tarea.id !== id)
      })),

      toggleTarea: (id) => set((state) => ({
        tareas: state.tareas.map(tarea =>
          tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        )
      })),
    }),
    {
      name: 'tareas-storage',
    }
  )
);