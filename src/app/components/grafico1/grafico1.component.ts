import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartConfiguration , ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

/* ****** CHART JS PLUGIN ANNOTATIONS ******
Para Chartjs plugin Annotations se debe ocupar la v0.5.7
npm i chartjs-plugin-annotation@0.5.7
https://valor-software.com/ng2-charts/#/LineChart
https://therichpost.com/angular-11-chartjs-working-demo/
*/ 
import * as pluginAnnotations from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styles: [
  ]
})
export class Grafico1Component implements OnInit {

  

  public lineChartData: ChartDataSets[] = [
    { data: [1200, 1400, 1600, 1800, 1800], label: 'Programación Mensual' },
    
  
  ];

  public lineChartLabels: Label[] = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'];

  public lineChartOptions: (ChartOptions ) = { 
    responsive: true,
    elements: {
          line: {
            tension: 0.5
          }
  },

  scales: {

    xAxes: [
      {
        position: 'left',
        ticks: {
          // color: 'red',
          max: 3000,
          min: 0
        }
      }
    ],
    yAxes: [
      {
        position: 'left',
        gridLines: {
          color: 'rgba(57,139,247,1)'
        },    
        ticks: {
          // color: 'red',
          max: 2000,
          min: 600
        }
      }
    ], 
  },
    
  
  plugins: {
        legend: { display: true },
        annotation: {
          annotations: [
            {
              type: 'line',
              scaleID: 'x',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                position: 'center',
                enabled: true,
                color: 'orange',
                content: 'LineAnno',
                font: {
                  weight: 'bold'
                }
              }
            },
          ],
        }
      }
    };

  

  public lineChartColors: Color[] = [
    { // aqua
      backgroundColor: 'rgba(224,240,252,0.3)',
      borderColor: 'rgba(0,128,206,1)',
      pointBackgroundColor: 'rgba(46,168,173,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(46,168,173,1)'
    },

  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];
  


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() { }

  ngOnInit(): void {
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
