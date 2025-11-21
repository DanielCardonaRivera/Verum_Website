import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: any[] = [];

  constructor() {}

  obtenerCarrito() {
    return this.carrito;
  }

  agregar(producto: any) {
    this.carrito.push(producto);
  }

  eliminar(index: number) {
    this.carrito.splice(index, 1);
  }

  limpiar() {
    this.carrito = [];
  }
}
