import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: [ './pages.component.css']
  
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {

    customFunction();
    

  }

}
