import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    //console.info(value,args);
    if (args.length >0) {
      return value * (1 + args[0]/100);
    }
    return value;
  }

}
