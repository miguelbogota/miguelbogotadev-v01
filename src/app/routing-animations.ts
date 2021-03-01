import { transition, trigger } from '@angular/animations';
import { slideDown, slideLeft, slideRight, slideUp } from '@app-core/animations/slide.animation';

export const slideInAnimation = [
  trigger('routeAnimations', [
    transition('project => *', slideDown),
    transition('* => project', slideUp),
    transition('profile => works', slideLeft),
    transition('profile => contact', slideRight),
    transition('works => *', slideRight),
    transition('contact => *', slideLeft),
  ]),
];
