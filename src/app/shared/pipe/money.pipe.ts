import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'money'
})

export class MoneyPipe implements PipeTransform {
    transform(value: number,char: string,){
        var money = char + ' ' + value;
        return money.replace('.',',');
    }
}
