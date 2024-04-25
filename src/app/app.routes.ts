import { Routes } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { AcercaDeComponent } from './page/acerca-de/acerca-de.component';
import { ArticuloComponent } from './page/articulo/articulo.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ImagenesComponent } from './page/imagenes/imagenes.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { NombresComponent } from './page/nombres/nombres.component';
import { PersonaComponent } from './page/persona/persona.component';
import { ProductosComponent } from './page/productos/productos.component';
import { UsersComponent } from './page/users/users.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.PERSONA,
        title: 'personas',
        component: PersonaComponent,
      },
      {
        path: PATH.IMAGEN,
        title: 'imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.NOMBRE,
        title: 'nombres',
        component: NombresComponent,
      },
      {
        path: PATH.ARTICULO,
        title: 'articulos',
        component: ArticuloComponent,
      },
      {
        path: PATH.ACERCADE,
        title: '¿Quienes Somos?',
        component: AcercaDeComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'contacto',
        component: ContactoComponent,
      },
      {
        path: PATH.USERS,
        title: 'Users',
        component: UsersComponent,
      },
      {
        path: PATH.PRODUCTO,
        title: 'Productos',
        component: ProductosComponent,
      },
    ],
  },
];
