import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

  title: string = '';
  description = '';

  recibirInformacion() {
    this.onInformacion.emit({
      title: this.title,
      description: this.description,
    });
  }
}
