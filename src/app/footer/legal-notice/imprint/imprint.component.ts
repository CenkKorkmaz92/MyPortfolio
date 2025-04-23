import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

/**
 * Component displaying the legal imprint and handling language selection and cursor tracking.
 */
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  /** Current X-coordinate of the cursor. */
  cursorX = 0;

  /** Current Y-coordinate of the cursor. */
  cursorY = 0;

  /** Currently selected language (English or German). */
  selectedLanguage: 'EN' | 'DE' = 'EN';

  /** Translations for imprint content in supported languages. */
  translations = {
    EN: {
      heading1: 'Imprint',
      heading2: 'Information acc. to § 5 TMG',
      block2: `
        <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstraße 45<br>
          71560 Sulzbach an der Murr
        </p>
      `,
      heading3: 'Contact',
      block3: `
        <p>
          Telefon: +49 (0) 1734376057<br>
          E-Mail:
          <a href="mailto:Cenk.Korkmaz92@gmail.com">
            Cenk.Korkmaz92&#64;gmail.com
          </a>
        </p>
      `,
      heading4: 'Editorially Responsible',
      block4: `
       <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstraße 45<br>
          71560 Sulzbach an der Murr
        </p>
        <p>
          Philipp Schönborn<br>
          Baumschulenring 26<br>
          72202 Nagold
        </p>
      `,
      block5: `
        <p>
          Source:
          <a href="https://www.e-recht24.de"
             target="_blank"
             rel="noopener nofollow">
            https://www.e-recht24.de
          </a>
        </p>
      `
    },
    DE: {
      heading1: 'Impressum',
      heading2: 'Angaben gemäß § 5 TMG',
      block2: `
        <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstraße 45<br>
          71560 Sulzbach an der Murr
        </p>
      `,
      heading3: 'Kontakt',
      block3: `
        <p>
          Telefon: +49 (0) 1734376057<br>
          E-Mail:
          <a href="mailto:Cenk.Korkmaz92@gmail.com">
            Cenk.Korkmaz92&#64;gmail.com
          </a>
        </p>
      `,
      heading4: 'Redaktionell verantwortlich',
      block4: `
       <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstraße 45<br>
          71560 Sulzbach an der Murr
        </p>
        <p>
          Philipp Schönborn<br>
          Baumschulenring 26<br>
          72202 Nagold
        </p>
      `,
      block5: `
        <p>
          Quelle:
          <a href="https://www.e-recht24.de"
             target="_blank"
             rel="noopener nofollow">
            https://www.e-recht24.de
          </a>
        </p>
      `
    },
  };

  /**
   * @param languageService Service for tracking and updating app language.
   * @param router Router instance for navigation.
   * @param route ActivatedRoute for handling route parameters.
   */
  constructor(
    private languageService: LanguageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * Subscribe to language changes on component initialization.
   */
  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  /**
   * Update cursor coordinates whenever the mouse moves.
   * @param event Mouse move event.
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  /**
   * Navigate back to the legal notice (home) with the current language.
   */
  goBackToLegalNotice(): void {
    this.router.navigate(
      ['/'],
      { queryParams: { lang: this.selectedLanguage } }
    );
  }
}
