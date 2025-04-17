import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LegalNoticeComponent } from './footer/legal-notice/legal-notice.component';


export const routes: Routes = [
  { path: '', component: HeroComponent },       // Default route
  { path: 'about', component: AboutComponent }, // Route for AboutComponent
  { path: 'skills', component: SkillsComponent }, // Route for SkillsComponent
  { path: 'portfolio', component: PortfolioComponent }, // Route for PortfolioComponent
  { path: 'comments', component: CommentsComponent }, // Route for CommentsComponent
  { path: 'contact', component: ContactComponent }, // Route for ContactComponent
  { path: 'footer', component: FooterComponent }, // Route for FooterComponent
  { path: 'legal-notice', component: LegalNoticeComponent }, // Route for LegalNoticeComponent
  { path: '**', redirectTo: '' }                // Wildcard route for undefined paths
];

