import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarritoService } from '../carrito/carrito.service';



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

   // Simula agregar un producto al carrito mostrando una alerta
  
  constructor(private carritoService: CarritoService) {}
  
  agregarAlCarrito(producto: any) {
    this.carritoService.agregar(producto);
    alert(`"${producto.nombre}" agregado al carrito`);
  }
}

