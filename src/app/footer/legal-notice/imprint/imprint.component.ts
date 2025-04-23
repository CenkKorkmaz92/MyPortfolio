import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  cursorX = 0;
  cursorY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
  }

  selectedLanguage: 'EN' | 'DE' = 'EN';

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

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private route: ActivatedRoute,   // ← if you later want to read/merge params
  ) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  goBackToLegalNotice(): void {
    this.router.navigate(
      ['/'],
      { queryParams: { lang: this.selectedLanguage } }
    );
  }
}