export interface Task {
  id: string;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: 'baja' | 'media' | 'alta';
  fechaLimite: Date | null;
  fechaCreacion: Date;
}