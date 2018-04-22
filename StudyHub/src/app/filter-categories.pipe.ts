import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategories',
  pure: false
})
export class FilterCategoriesPipe implements PipeTransform {

  transform(items: any[], args: string): any {
    // console.log(args)
    if (!args){
      return items;
    }else{
      return items.filter(item => item[args] === "true");
      
    }
}

}
