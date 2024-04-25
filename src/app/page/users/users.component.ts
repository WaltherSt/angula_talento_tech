import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../compoments/tabla/tabla.component';
import { PersonaInterface } from '../../core/interface/persona.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: PersonaInterface[] = [];
  columns: string[] = [];

  columnTitles: string[] = [
    'Nombre',
    'Correo',
    'Fecha de nacimiento',
    'Celular',
    'Documento',
    'Tipo de documento',
    'Peso',
  ];

  ngOnInit(): void {
    this.users.push(
      {
        nombre: 'Sofía López',
        email: 'sofia@example.com',
        fechaNacimiento: new Date('1992-08-25').toLocaleDateString(),
        numeroCelular: 111111111,
        numeroDocumento: '777777777',
        tipoDocumento: 'Cédula de ciudadanía',
        peso: '60kg',
      },
      {
        nombre: 'Javier González',
        email: 'javier@example.com',
        fechaNacimiento: new Date('1980-04-15').toLocaleDateString(),
        numeroCelular: 222222222,
        numeroDocumento: '888888888',
        tipoDocumento: 'Cédula de extranjería',
        peso: '75kg',
      },
      {
        nombre: 'Ana María Rodríguez',
        email: 'anamaria@example.com',
        fechaNacimiento: new Date('1975-11-10').toLocaleDateString(),
        numeroCelular: 333333333,
        numeroDocumento: '999999999',
        tipoDocumento: 'Pasaporte',
        peso: '65kg',
      },
      {
        nombre: 'David Martínez',
        email: 'david@example.com',
        fechaNacimiento: new Date('1998-02-20').toLocaleDateString(),
        numeroCelular: 444444444,
        numeroDocumento: '101010101',
        tipoDocumento: 'Tarjeta de identidad',
        peso: '70kg',
      },
      {
        nombre: 'Valeria Pérez',
        email: 'valeria@example.com',
        fechaNacimiento: new Date('1987-06-05').toLocaleDateString(),
        numeroCelular: 555555555,
        numeroDocumento: '121212121',
        tipoDocumento: 'Cédula de ciudadanía',
        peso: '55kg',
      }
    );
    this.columns = Object.keys(this.users[0]);
  }
}
