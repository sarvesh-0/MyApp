import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nthpower'
})
export class NthpowerPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number{
    return value*value;
  }

}
