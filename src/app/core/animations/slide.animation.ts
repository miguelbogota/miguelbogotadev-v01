import { animate, animateChild, group, query, style } from '@angular/animations';

/** Animation to slide to the right. */
export const slideRight = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      left: 0,
      width: '100%',
      maxWidth: 'var(--max-window-width)',
      padding: '0px 14px',
      boxSizing: 'border-box',
    }),
  ]),
  query(':enter', [style({ left: '100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('220ms linear', style({ left: '-100%', opacity: 0 }))]),
    query(':enter', [animate('220ms linear', style({ left: '14px', opacity: 1 }))]),
  ]),
  query(':enter', animateChild()),
];

/** Animation to slide to the left. */
export const slideLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      left: 0,
      width: '100%',
      maxWidth: 'var(--max-window-width)',
      padding: '0px 14px',
      boxSizing: 'border-box',
    }),
  ]),
  query(':enter', [style({ left: '-100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('220ms linear', style({ left: '100%', opacity: 0 }))]),
    query(':enter', [animate('220ms linear', style({ left: '14px', opacity: 1 }))]),
  ]),
  query(':enter', animateChild()),
];

/** Animation to slide up. */
export const slideUp = [
  query(':enter', [style({ top: '100vh' })]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [animate('220ms linear', style({}))], { optional: true }),
    query(':enter', [animate('220ms linear', style({ top: 0 }))]),
  ]),
  query(':enter', animateChild()),
];

/** Animation to slide down. */
export const slideDown = [
  query(':leave', [style({ top: 0 })]),
  group([
    query(':enter', [animate('300ms linear')], { optional: true }),
    query(':leave', [animate('250ms linear', style({ top: '100vh' }))]),
  ]),
  query(':leave', animateChild()),
  query(':enter', animateChild(), { optional: true }),
];
