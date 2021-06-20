// npm i @fullcalendar/list // For List View
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-listcalendar',
  templateUrl: './listcalendar.component.html',
  
})
export class ListcalendarComponent implements OnInit {

  locales = [esLocale];
  calendarOptions: CalendarOptions = {
    initialView: 'listWeek',
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      //abril
      { title: 'Informe Selección programado 020LP2020', date: '2021-04-20'},
      { title: 'Vencimiento Garantía 015LP2019', date: '2021-04-20'},
      { title: 'Informe Selección programado 012LP2021', date: '2021-04-24'},
      { title: 'Protocolización Programada 067LP2021', date: '2021-04-24'},
      { title: 'Publicación Prensa programada 055LP2021', date: '2021-04-25'},
      { title: 'Fecha Resolución que adjudica programada 070LP2020', date: '2021-04-25'},
      { title: 'Fecha Término consultas 066LP2019', date: '2021-04-25'},
      { title: 'Fecha firma contrato programada 135LP2019', date: '2021-04-26'},
      { title: 'Aviso Liquidación (quedan 60 días) 137LP2019', date: '2021-04-27'},
      { title: 'Informe Selección programado 145TD2020', date: '2021-04-28'},
      //Mayo
      { title: 'Informe Selección programado 020LP2020', date: '2021-05-20'},
      { title: 'Vencimiento Garantía 015LP2019', date: '2021-05-20'},
      { title: 'Informe Selección programado 012LP2021', date: '2021-05-24'},
      { title: 'Protocolización Programada 067LP2021', date: '2021-05-24'},
      { title: 'Publicación Prensa programada 055LP2021', date: '2021-05-25'},
      { title: 'Fecha Resolución que adjudica programada 070LP2020', date: '2021-05-25'},
      { title: 'Fecha Término consultas 066LP2019', date: '2021-05-25'},
      { title: 'Fecha firma contrato programada 135LP2019', date: '2021-05-26'},
      { title: 'Aviso Liquidación (quedan 60 días) 137LP2019', date: '2021-05-27'},
      { title: 'Informe Selección programado 145TD2020', date: '2021-05-28'},
    ]
  };
constructor() { }

  ngOnInit(): void {
  }

}
