import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      title: 'Menu',
      icon : 'mdi mdi-gauge',
      submenu: [
        { title: 'Principal', url: '/' },
        // { title: 'Grafica 1', url: 'grafica1' },
          { title: 'Mensajes', url: 'mensajes' },
          // { title: 'Análisis m2', url: 'rxjs' },
        
      ]

    }
  ]

  
  search: any [] = [
    {
      title: 'Consultas',
      icon : 'fa fa-search',
      submenu: [
        { title: 'Consultar Obra', url: 'search' },
        { title: 'Consultar Actividades', url: 'listcalendar' },
        
      ]

    }
  ]

  herramientas: any [] = [
    {
      title: 'Herramientas',
      icon : 'mdi mdi-gauge',
      submenu: [        
        { title: 'Programación Ancla', url: 'ancla' },
        // { title: 'Modificación de contratos', url: 'modificacion/balance' },
        { title: 'Metas', url: 'metas' },
        { title: 'Resumen Ejecutivo', url: 'ejecutivo' },
        { title: 'Gestión de reuniones', url: 'reuniones' },
        // { title: 'pdf', url: 'pdfmaker' },

      ]

    }
  ]


  constructor() { }
}
