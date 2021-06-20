import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: [ './formatos.component.css']
})
export class FormatosComponent {

  @ViewChild('content', {static: false}) el!: ElementRef;

  title = 'Angular PDF';

  constructor() { }


  makePDF(){
    let pdf = new jsPDF('p','pt', 'a4'); // portrait, points, a4 = oficio
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
    
  }

}
