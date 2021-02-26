import { Component, Input } from '@angular/core';
import { AppSocialLink } from '@app-core/models/social-link.model';
import { ContentService } from '@app-core/services/content/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(
    public contentService: ContentService,
  ) { }

  @Input() public showContactButton = true;

  // Current year needed for the copyright always up to date
  public currentYear = new Date().getFullYear();

  public socialLinks: AppSocialLink[] = [
    { label: 'GitHub profile link', icon: 'bx bxl-github', link: 'https://github.com/miguelbogota' },
    { label: 'LinkedIn profile link', icon: 'bx bxl-linkedin-square', link: 'https://linkedin.com/in/miguelbogota' },
    { label: 'Instagram profile link', icon: 'bx bxl-instagram-alt', link: 'https://instagram.com/migue_bogota' },
    { label: 'Dev.to profile link', icon: 'bx bxl-dev-to', link: 'https://dev.to/miguelbogota' },
  ];

}
