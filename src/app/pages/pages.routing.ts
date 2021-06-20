import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListcalendarComponent } from './listcalendar/listcalendar.component';
import { ModificacionComponent } from './modificaciones/modificacion/modificacion.component';
import { BalanceComponent } from './modificaciones/balance/balance.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AnclaComponent } from './ancla/ancla.component';
import { MetasComponent } from './metas/metas.component';
import { EjecutivoComponent } from './ejecutivo/ejecutivo.component';
import { ReunionesComponent } from './reuniones/reuniones.component';
import { PdfmakerComponent } from '../components/pdfmaker/pdfmaker.component';
import { ImprimirComponent } from '../components/imprimir/imprimir.component';
import { Grafico1Component } from '../components/grafico1/grafico1.component';



//enviar data a través de rutas utilizando 'data'. ADV 84. 

const routes: Routes = [
    { path: 'imprimir', component: ImprimirComponent, data: { title: 'Imprimir' } },
    
    {   path: 'dashboard', 
        component: PagesComponent,
        children: [
        { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
        { path: 'mensajes', component: MensajesComponent, data: { title: 'Mensajes' } },

        //Lógica Herramientas
        { path: 'ancla', component: AnclaComponent, data: { title: 'Prog. Ancla' } },
        { path: 'metas', component: MetasComponent, data: { title: 'Metas' } },
        { path: 'ejecutivo', component: EjecutivoComponent, data: { title: 'Ejecutivos' } },
        { path: 'reuniones', component: ReunionesComponent, data: { title: 'Reuniones' } },
        { path: 'pdfmaker', component: PdfmakerComponent, data: { title: 'PDFs' } },
        

        // Lógica Searchings results
        {path: 'search', component: ConsultarComponent, data: { title: 'Consultar Obra' }},
        {path: 'detalle/:id', component: DetalleComponent, data: { title: 'Detalle' }}, // dashboard/detalle/-MUFMdylZubJR0VIpjQJ 
        {path: 'listcalendar', component: ListcalendarComponent, data: { title: 'Consultar Actividad' }},

        //Lógica Modificación de contrato
        {path: 'modificacion', component: ModificacionComponent,
        children: [
        { path: 'balance', component: BalanceComponent, data: { title: 'Dashboard' } },
        ]},
        ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
