import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


/*
HOW TO INSTALL DATA TABLES
https://datatables.net/manual/
https://therichpost.com/angular-11-datatable-working-example/
*/
import { DataTablesModule } from 'angular-datatables';

// HOW TO INSTALL PDF MAKE
// http://pdfmake.org/#/
// npm install --save pdfmake
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
PdfMakeWrapper.setFonts(pdfFonts);

/*
*********CHART.JS****************
https://www.chartjs.org/chartjs-plugin-annotation/guide/#installation
https://www.npmjs.com/package/ng-chartjs
https://github.com/93Alliance/ng-chartjs/blob/master/src/app/app.module.ts
npm install chart.js@2.9.4 ng2-charts@2.4.2
*/
import { ChartsModule } from 'ng2-charts';


import { PdfmakerComponent } from './pdfmaker/pdfmaker.component';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { SidebarProgramaComponent } from './sidebar-programa/sidebar-programa.component';

import { Grafico1Component } from './grafico1/grafico1.component';
import { GraphAnualComponent } from './graph-anual/graph-anual.component';
import { StatBoxComponent } from './stat-box/stat-box.component';
import { TablaProgramasComponent } from './tabla-programas/tabla-programas.component';
import { FeedsComponent } from './feeds/feeds.component';



@NgModule({
  declarations: [
    IncrementadorComponent, 
    PdfmakerComponent, 
    ImprimirComponent, 
    Grafico1Component, 
    SidebarProgramaComponent, 
    GraphAnualComponent, 
    StatBoxComponent, 
    TablaProgramasComponent, 
    FeedsComponent
  ],
  exports: [
    IncrementadorComponent,
    Grafico1Component,
    SidebarProgramaComponent,
    ImprimirComponent,
    PdfmakerComponent,
    GraphAnualComponent,
    StatBoxComponent,
    TablaProgramasComponent,
    FeedsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,    
    ChartsModule,  
  ]
})
export class ComponentsModule { }
