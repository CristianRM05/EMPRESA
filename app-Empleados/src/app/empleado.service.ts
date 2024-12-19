import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación
})
export class EmpleadoService {

  empleados = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana', apellido: 'Gómez', email: 'ana.gomez@example.com' },
    { id: 3, nombre: 'Carlos', apellido: 'López', email: 'carlos.lopez@example.com' }
  ];

// El contador empieza con el tamaño de la lista de empleados
  private idCounter: number = this.empleados.length;

  constructor() { }

  // Método para añadir empleado
  agregarEmpleado( nombre: string, apellido: string, email: string): void {
    // Incrementa el id y asigna a cada nuevo empleado
    const newId = ++this.idCounter;

    // Agrega el nuevo empleado con un id autoincremental
    this.empleados.push({ id: newId, nombre, apellido, email });
  }

  // Método para obtener la lista de empleados
  obtenerEmpleados(): { id:number; nombre: string; apellido: string; email: string }[] {
    return this.empleados;
  }

  encontrarEmpleado(id: number): Empleado | undefined {
    return this.empleados.find(emp => emp.id === id);
  }

  actualizarEmpleado(id: number, nombre: string, apellido: string, email: string): void {
    const empleado = this.empleados.find(emp => emp.id === id);
    if (empleado) {
      empleado.nombre = nombre;
      empleado.apellido = apellido;
      empleado.email = email;
    }
  }
}
