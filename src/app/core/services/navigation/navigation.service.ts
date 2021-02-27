import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  private routerSubscription: Subscription;
  private navigationSubject = new BehaviorSubject('previous-page-not-in-domain');

  constructor(
    private router: Router,
  ) {
    this.routerSubscription = this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise(),
      )
      .subscribe((events: RoutesRecognized[]) => {
        this.navigationSubject.next(events[0].urlAfterRedirects);
        this.routerSubscription.unsubscribe();
      });
  }

  public get isPreviousPageInDomain(): boolean {
    return this.navigationSubject.value !== 'previous-page-not-in-domain';
  }

}
