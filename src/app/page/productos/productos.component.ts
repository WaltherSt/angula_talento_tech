import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../compoments/tabla/tabla.component';
import { ProductoInterface } from '../../core/interface/producto.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent, JsonPipe],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  productos: ProductoInterface[] = [];
  columns: string[] = [];
  columnTitles: string[] = ['Nombre', 'Codigo', 'Cant', 'Valor'];
  informacion: any;

  ngOnInit(): void {
    this.productos.push(
      {
        nombre: 'Camisa',
        sku: 'CAM123',
        cantidad: 10,
        precio: 25.99,
      },
      {
        nombre: 'Pantalón',
        sku: 'PAN456',
        cantidad: 15,
        precio: 39.99,
      },
      {
        nombre: 'Zapatos',
        sku: 'ZAP789',
        cantidad: 8,
        precio: 59.99,
      },
      {
        nombre: 'Bufanda',
        sku: 'BUF234',
        cantidad: 20,
        precio: 12.5,
      },
      {
        nombre: 'Gorra',
        sku: 'GOR567',
        cantidad: 30,
        precio: 9.99,
      }
    );

    this.columns = Object.keys(this.productos[0]);
  }

  recibirInfomacion(data: any) {
    this.informacion = data;
    console.log('componente padre de :', this.informacion);
  }
}
