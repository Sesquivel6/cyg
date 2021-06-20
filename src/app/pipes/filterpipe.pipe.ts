import { Pipe, PipeTransform } from '@angular/core';
import { ObraModel } from '../models/obra.model';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(items: ObraModel[], searchText: string): ObraModel[] {

    if(!items || !searchText) {
      return items;
    }
    return items.filter(items => 
            items.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
}
}