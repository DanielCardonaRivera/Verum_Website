import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  eliminarItem(index: number) {
    this.carritoService.eliminar(index);
  }

  vaciarCarrito() {
    this.carritoService.limpiar();
  }

  total() {
    return this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }
}
