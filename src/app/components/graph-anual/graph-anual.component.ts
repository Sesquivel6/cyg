import { Component, OnInit, ViewChild } from '@angular/core';
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
  selector: 'app-graph-anual',
  templateUrl: './graph-anual.component.html',
  styles: [
  ]
})
export class GraphAnualComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [200, 400, 600, 800, 800, 800, 1000, 1200, 1200, 1200, 1200, 1400], label: 'Gasto Programado' },
    { data: [150, 390, 610, 820, 790, 795, , , , , , ], label: 'Gasto Real' },
  
  ];

  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

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
          
          min: 0
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
    { // aqua
      backgroundColor: 'rgba(19,46,82,0.3)',
      borderColor: 'rgba(19,46,82,1)',
      pointBackgroundColor: 'rgba(19,46,82,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(19,46,82,1)'
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
