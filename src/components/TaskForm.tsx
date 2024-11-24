import React, { useState, FormEvent } from 'react';
import { useTaskStore } from '../store/taskStore';

export const TaskForm: React.FC = () => {
  const initialState = {
    titulo: '',
    descripcion: '',
    prioridad: 'media' as const,
    fechaLimite: ''
  };

  const [formData, setFormData] = useState(initialState);
  const agregarTarea = useTaskStore(state => state.agregarTarea);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    agregarTarea({
      ...formData,
      completada: false,
      fechaLimite: formData.fechaLimite ? new Date(formData.fechaLimite) : null,
    });

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium mb-1">
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Ingresa el título de la tarea"
            className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium mb-1">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Describe la tarea"
            className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            rows={3}
          />
        </div>
        
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="prioridad" className="block text-sm font-medium mb-1">
              Prioridad
            </label>
            <select
              id="prioridad"
              name="prioridad"
              value={formData.prioridad}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
          
          <div className="flex-1">
            <label htmlFor="fechaLimite" className="block text-sm font-medium mb-1">
              Fecha Límite
            </label>
            <input
              id="fechaLimite"
              name="fechaLimite"
              type="date"
              value={formData.fechaLimite}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full mt-6 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        Agregar Tarea
      </button>
    </form>
  );
};