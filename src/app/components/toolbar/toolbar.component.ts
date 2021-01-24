import { Component } from '@angular/core';
import { AppSocialLink } from '@app-core/models/social-link.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  socialLinks: AppSocialLink[] = [
    { label: 'GitHub profile link', icon: 'bx bxl-github', link: 'https://github.com/miguelbogota' },
    { label: 'LinkedIn profile link', icon: 'bx bxl-linkedin-square', link: 'https://linkedin.com/in/miguelbogota' },
    { label: 'Instagram profile link', icon: 'bx bxl-instagram-alt', link: 'https://instagram.com/migue_bogota' },
  ];

}
