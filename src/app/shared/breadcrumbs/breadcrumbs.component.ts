import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) { 

    this.tituloSubs$ = this.getDataRoute()
    // .subscribe( data => {
                //   console.log(data);
                //   this.titulo = data.title
                //   console.log(data.title);
                //   document.title = `Admin Pro - ${data.title} `

                // }) SIMILARES CON LO DE ABAJO
                .subscribe(( { title } ) => { 
                  this.titulo = title;
                  document.title = `Control y Gestión - ${ title } `;
  })

}
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

getDataRoute ( ) {

  return this.router.events
                .pipe(
                  filter( event => event instanceof ActivationEnd ),
                  filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
                  map( (event: ActivationEnd) => event.snapshot.data ),
                )
                

}

}
