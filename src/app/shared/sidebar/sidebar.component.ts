import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  searchItems: any[];
  herramientasItems: any[];
  modItems: any[];
  poeItems: any[];


  constructor( private sidebarService: SidebarService) { 

    this.menuItems = sidebarService.menu;
    this.searchItems = sidebarService.search;
    this.herramientasItems = sidebarService.herramientas;    

    
  }

  ngOnInit(): void {

    
  }

}
