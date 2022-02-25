import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform {
    transform(value: any) {
        var num = "es impar";
        if (!(value % 2)) {
            num = 'es par ';
        }
        return "El año es " + value + " y " + num;// El valor de value es el valor al que se le ponga la pipe
    }
}