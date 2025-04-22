// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './footer/legal-notice/legal-notice.component';
import { DataProtectionComponent } from './footer/legal-notice/data-protection/data-protection.component';
import { ImprintComponent } from './footer/legal-notice/imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'legal-notice/data-protection', component: DataProtectionComponent },
  { path: 'legal-notice/imprint', component: ImprintComponent },
  { path: '**', redirectTo: '' }
];
