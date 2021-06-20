import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-pdfmaker',
  templateUrl: './pdfmaker.component.html',
  styleUrls: [ './pdfmaker.component.css'  ]
})
export class PdfmakerComponent implements OnInit {
  
    
  
  constructor(
    public printService: PrintService) {

}

  ngOnInit(){}

onPrintInvoice() {
  // https://stackblitz.com/edit/github-m7bryn?file=src%2Fapp%2Fapp-routing.module.ts
  this.printService
    .printDocument('imprimir');
}
}

