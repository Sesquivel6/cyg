import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
//4. Importar módulo
import {DataTablesModule} from 'angular-datatables';

// MatModule
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import { ChartsModule } from 'ng2-charts';

// Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular'; // npm install --save @fullcalendar/angular @fullcalendar/daygrid
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // npm i @fullcalendar/interaction
import listPlugin from '@fullcalendar/list'; // npm i @fullcalendar/list
import { ListcalendarComponent } from './listcalendar/listcalendar.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);

// SERVICES
import { HttpClientModule } from '@angular/common/http';

// pipes
import { FilterpipePipe } from '../pipes/filterpipe.pipe';

//Print Service
import {PrintService} from '../services/print.service';

// ------------ PÁGINAS ----------------
import { PagesComponent } from './pages.component';

//DASHBOARD
import { DashboardComponent } from './dashboard/dashboard.component';



// LÓGICA CONSULTAR INFORMACIÓN
import { ConsultarComponent } from './consultar/consultar.component';
import { DetalleComponent } from './detalle/detalle.component';


//MODIFICACIONES DE CONTRATO
import { BalanceComponent } from './modificaciones/balance/balance.component';
import { ModificacionComponent } from './modificaciones/modificacion/modificacion.component';
import { FormatosComponent } from './formatos/formatos.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AnclaComponent } from './ancla/ancla.component';
import { MetasComponent } from './metas/metas.component';
import { EjecutivoComponent } from './ejecutivo/ejecutivo.component';
import { ReunionesComponent } from './reuniones/reuniones.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ListcalendarComponent,

    //Lógica Search
    ConsultarComponent,
    DetalleComponent,  
  //pipes
    FilterpipePipe,
  
  //Lógica Compensado
  BalanceComponent, 
  ModificacionComponent, 
  
  MensajesComponent, 
  AnclaComponent, 
  MetasComponent, 
  EjecutivoComponent, 
  ReunionesComponent,

  FormatosComponent, 
  
],

    // los exporto para que todos los exports se encuentren en sus declaraciones
    exports: [
      DashboardComponent,
      PagesComponent,

      //Lógica Search
      ConsultarComponent,
      DetalleComponent,  
      //pipes
      FilterpipePipe,
      
    
    ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    // ChartsModule,   
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    //6.-
    DataTablesModule
    
    
  ],
  providers: [PrintService],
})

export class PagesModule { }
