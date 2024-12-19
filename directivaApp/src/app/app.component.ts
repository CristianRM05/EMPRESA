import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuario ';
  mensaje="";
  registrado=false;
  nombre="";
  apellido="";
  cargo="";
  entradas: { titulo: string }[] = [
    { titulo: "Python cada día más presente" },
    { titulo: "JavaScript" },
    { titulo: "TypeScript" },
    { titulo: "Angular" },
    { titulo: "Node.js" },
  ];

  registrarUsuario(){
    this.registrado=true;
    this.mensaje= 'Usuario registrado '+ this.nombre +" " + this.apellido +" " + this.cargo;
  }
}
