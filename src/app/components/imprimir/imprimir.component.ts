import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: [ './imprimir.component.css'
  ]
})
export class ImprimirComponent implements OnInit {

  constructor(route: ActivatedRoute,
              private printService: PrintService) {
    
  }

  ngOnInit(): void {

    this.printService.onDataReady();
  }

  
}
