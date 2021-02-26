import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

@Pipe({
  name: 'typewritter',
})
export class TypewritterPipe implements PipeTransform {

  transform(value: string[], delayInSecods: number): Observable<string> {

    // Do something for the typewritter effect
    return of(value[0]);

  }

}
