import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../compoments/tabla/tabla.component';
import { PersonaInterface } from '../../core/interface/persona.interface';

@Component({
  selector: 'app-persona',
  standalone: true,
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
  imports: [TablaComponent],
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];
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
    this.personas.push(
      {
        nombre: 'María García',
        email: 'maria@example.com',
        fechaNacimiento: new Date('1990-09-15').toLocaleDateString('en-US'),
        numeroCelular: 987654321,
        numeroDocumento: '123456789',
        tipoDocumento: 'Pasaporte',
        peso: '55kg',
      },
      {
        nombre: 'Pedro López',
        email: 'pedro@example.com',
        fechaNacimiento: new Date('1990-09-15').toLocaleDateString('en-US'),
        numeroCelular: 555555555,
        numeroDocumento: '333333333',
        tipoDocumento: 'Cédula de extranjería',
        peso: '75kg',
      },
      {
        nombre: 'Ana Martinez',
        email: 'ana@example.com',
        fechaNacimiento: new Date('1990-10-15').toLocaleDateString('en-US'),
        numeroCelular: 777777777,
        numeroDocumento: '444444444',
        tipoDocumento: 'Tarjeta de identidad',
        peso: '65kg',
      },
      {
        nombre: 'Carlos Rodriguez',
        email: 'carlos@example.com',
        fechaNacimiento: new Date('1990-09-15').toLocaleDateString('en-US'),
        numeroCelular: 999999999,
        numeroDocumento: '222222222',
        tipoDocumento: 'Pasaporte',
        peso: '80kg',
      },
      {
        nombre: 'Laura Fernández',
        email: 'laura@example.com',
        fechaNacimiento: new Date('1990-09-15').toLocaleDateString('en-US'),
        numeroCelular: 666666666,
        numeroDocumento: '555555555',
        tipoDocumento: 'Cédula de extranjería',
        peso: '70kg',
      },
      {
        nombre: 'Diego Ramírez',
        email: 'diego@example.com',
        fechaNacimiento: new Date('1990-09-15').toLocaleDateString('en-US'),
        numeroCelular: 888888888,
        numeroDocumento: '666666666',
        tipoDocumento: 'Pasaporte',
        peso: '85kg',
      }
    );

    this.columns = Object.keys(this.personas[0]);
  }
}
