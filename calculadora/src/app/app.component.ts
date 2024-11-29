import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void{
    this.resultado=this.numero1+this.numero2;
}
restar():void{
    this.resultado=this.numero1-this.numero2;
}

dividir():void{
    if(this.numero2===0){
      alert("El numero 2 para poder dividir no puede ser 0 ")
    }else {
      this.resultado=this.numero1/this.numero2;
    }

}

multiplicar():void{
  this.resultado=this.numero1*this.numero2;
}

}
