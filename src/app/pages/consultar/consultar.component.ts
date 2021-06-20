import { Component, Input, OnInit } from '@angular/core';
import { ObraModel } from 'src/app/models/obra.model';
import { ObraService } from 'src/app/services/obra.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styles: [
  ]
})
export class ConsultarComponent implements OnInit {

  @Input() heroes: ObraModel[] = [];
  cargando = false;
  searchText: string;

  constructor(private ObraService: ObraService) { }

  ngOnInit(): void {

    this.cargando = true;
    this.ObraService.getHeroes()
        .subscribe ( resp => {
        console.log(resp);
        this.heroes = resp;
        this.cargando = false;
        
        })
        
  }

}
