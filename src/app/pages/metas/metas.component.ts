import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styles: [
  ]
})
export class MetasComponent {

  navLinks = [
    {path: 'meta1', label: 'meta 1'},
    {path: 'meta2', label: 'meta 2'},
    {path: 'meta3', label: 'meta 3'},
    {path: 'meta4', label: 'meta 4'},
    {path: 'meta5', label: 'meta 5'},
    {path: 'meta6', label: 'meta 6'},
    {path: 'meta7', label: 'meta 7'},
    {path: 'meta8', label: 'meta 8'},
    {path: 'meta9', label: 'meta 9'},    
  ];

}
