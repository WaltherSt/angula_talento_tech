import { DatePipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe, JsonPipe, TitleCasePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() columnTitles: string[] = [];
  @Input() titulo: string = '';

  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('personas en el componente hijo: ', this.data);
  }

  enviarInformacion(data: any) {
    this.onInformacion.emit(data);
  }
}
