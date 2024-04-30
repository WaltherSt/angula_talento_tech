import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'fa-sharp fa-thin fa-house',
    classCss: '',
    submenu: [],
  },

  {
    path: PATH.PERSONA,
    title: 'Persona',
    icon: 'fa-thin fa-arrows-rotate',
    classCss: '',
    submenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagen',
        icon: '',
        classCss: '',
        submenu: [],
      },
      {
        path: PATH.ACERCADE,
        title: 'Acercade',
        icon: '',
        classCss: '',
        submenu: [],
      },
    ],
  },
  {
    path: PATH.IMAGEN,
    title: 'Imagen',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.LISTATAREAS,
    title: 'Lista',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.NOMBRE,
    title: 'Nombre',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'AcercaDe',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.USERS,
    title: 'Usuarios',
    icon: '',
    classCss: '',
    submenu: [],
  },
  {
    path: PATH.PRODUCTO,
    title: 'Productos',
    icon: '',
    classCss: '',
    submenu: [],
  },
];
