import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
  pure: false
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], args: string): any {
    // console.log(args)
    if (!args){
      return items;
    }else{
      return items.filter(item => item.includes(args));
    }
      
    }

}
