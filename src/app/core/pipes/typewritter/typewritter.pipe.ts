import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, from, Subscription, interval, concat } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, take } from 'rxjs/operators';

@Pipe({
  name: 'typewritter',
})
export class TypewritterPipe implements PipeTransform {

  public transform(values: string[]): Observable<string> {
    // Shuffle array order to start with something different always
    return from(values.sort( () => .5 - Math.random()))
      .pipe(
        delay(1500),
        concatMap(word => concat(
          this.type(word, 120),                       // type
          of('').pipe(delay(60000), ignoreElements()), // pause with text
          this.type(word, 50, true),                  // delete
          of('').pipe(delay(30), ignoreElements()),   // pause without text
        )),
        repeat(),
      );
  }

  /**
   * Returns an observable with the animation of a typewriter.
   *
   * @param word String to add add the effect.
   * @param speed Speed in milliseconds when animation.
   * @param backward If true the animation goes backwards.
   */
  private type(word: string, speed: number, backward = false): Observable<string> {
    return interval(speed).pipe(
      map(x => backward ? word.substr(0, word.length - x - 1) : word.substr(0, x + 1)),
      take(word.length),
    );
  }

}
