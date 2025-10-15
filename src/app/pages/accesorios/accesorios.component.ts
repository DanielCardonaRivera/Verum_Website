import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent {
  productosAccesorios = [
    { nombre: 'Collar Sagrado Corazòn Rojo', precio: 50000, imagen: 'assets/img/collar1.jpg' },
    { nombre: 'Collar Sagrado Corazòn Dorado', precio: 50000, imagen: 'assets/img/collar2.jpg' },
    { nombre: 'Collar Inmaculado Corazòn Rosado', precio: 50000, imagen: 'assets/img/collar3.jpg' }
  ];

  agregarAlCarrito(producto: any) {
    alert( producto.nombre + ' Agregado al carrito con éxito.');
    // Por ejemplo, podrías emitir un evento o llamar a un servicio


  }
}

