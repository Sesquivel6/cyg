import { Component, OnInit } from '@angular/core';

// 1.-
/*HOW TO INSTALL DATA TABLES
https://datatables.net/manual/
https://therichpost.com/angular-11-datatable-working-example/
*/
import {DataTablesModule} from 'angular-datatables';

@Component({
  selector: 'app-ejecutivo',
  templateUrl: './ejecutivo.component.html',
  styles: [
  ]
})
export class EjecutivoComponent implements OnInit {

  // 2.-
  dtOptions: any = {};

  constructor() { }

  ngOnInit(): void {

    // 3.-
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      lengthMenu : [25,50],
      processing: true,
      dom: '<lf<Bt>ip>',
      buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
                ]
    };

  }

}
