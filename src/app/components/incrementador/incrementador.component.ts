import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // adv 49. 1:07
  @Input('valor') progreso: number = 50;  // para renombrar
  // @Input() progreso: number = 50;
  @Input() btnClass:string = 'btn-primary'

  //Event Emitter
  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor:number){

    if (this.progreso >=100 && valor >= 0) {
      this.outputValue.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <=0 && valor < 0) {
      this.outputValue.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor ;
    this.outputValue.emit(this.progreso);
  }

  onChange(newValue:number) {

    if ( newValue >= 100 ) { 
      this.progreso = 100 ;
    } else if ( newValue <= 0 ) {
      this.progreso = 0 ;
    } else {
      this.progreso = newValue ;
    }


    this.outputValue.emit( newValue );
  }

}
