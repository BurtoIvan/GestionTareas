import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Gestor de Tareas
        </h1>
        
        <TaskForm />
        <div className="mt-6">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;