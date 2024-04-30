import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../compoment/formulario/formulario.component';
import { TablaComponent } from '../../compoment/tabla/tabla.component';
import { TasksInterface } from '../../core/interface/tasks.interface';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [TablaComponent, FormularioComponent],
})
export class ListaTareasComponent implements OnInit {
  taksList: TasksInterface[] = [];
  columns: string[] = [];
  columnTitles: string[] = ['Titulo', 'Descripción'];

  showForm: boolean = false;

  title: string = 'Lista de tareas';

  ngOnInit(): void {
    this.taksList.push({
      title: 'hacer cualquier cosa',
      description: 'hacerla bien ',
    });

    this.columns = Object.keys(this.taksList[0]);
  }

  addTaks(taks: TasksInterface) {
    this.taksList.push(taks);
    this.showFormFuntion();
  }

  showFormFuntion() {
    this.showForm = !this.showForm;
  }
}
