import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selectedLanguage: 'EN' | 'DE' = 'EN';

  translations = {
    EN: {
      webDeveloper: 'Web Developer',
      location: 'Sulzbach an der Murr, Germany',
      legalNotice: 'Legal Notice',
      scrollToTop: 'Scroll to top',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    DE: {
      webDeveloper: 'Webentwickler',
      location: 'Sulzbach an der Murr, Deutschland',
      legalNotice: 'Impressum',
      scrollToTop: 'Nach oben',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  };

  /**
   * @param languageService keeps track of the current UI language
   */
  constructor(private languageService: LanguageService) { }

  /**
   * Subscribe to language changes so we update the footer automatically.
   */
  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  /**
   * Programmatically switch the language (if you ever expose a UI for it here).
   * @param language 'EN' or 'DE'
   */
  setLanguage(language: 'EN' | 'DE'): void {
    this.languageService.setLanguage(language);
  }

  /**
   * Scrolls smoothly to the navbar element.
   * If the element isn’t found, logs a warning.
   */
  scrollToNavbar(): void {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('navbar element not found!');
    }
  }
}
