import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value:string, ...args: unknown[]):string {
    if(value == "United States of America")
      return "USA"
    else if(value == "India")
      return "IND";
    else if(value == "United Kingdaom")
      return "UK"
    else
      return value.substring(0,3).toUpperCase()
  }

}
