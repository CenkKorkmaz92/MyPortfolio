import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DialogService } from '../../shared/dialog.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../language.service';

/**
 * Handles legal notices by opening dialogs for data protection and imprint.
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit, OnDestroy {
  selectedLanguage: 'EN' | 'DE' = 'EN';

  translations = {
    EN: {
      dataProtection: 'Data Protection',
      imprint: 'Imprint',
    },
    DE: {
      dataProtection: 'Datenschutz',
      imprint: 'Impressum',
    },
  };

  private subscription!: Subscription;

  /**
   * @param dialog Material dialog service for opening modals
   * @param dialogService Service emitting triggers for data protection dialog
   * @param languageService Service providing current language selection
   */
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogService,
    private languageService: LanguageService
  ) { }

  /**
   * Sets up subscriptions for data protection triggers and language changes.
   */
  ngOnInit(): void {
    this.subscription = this.dialogService.dataProtectionTrigger$
      .subscribe(() => this.openDataProtection());
    this.languageService.language$
      .subscribe(lang => this.selectedLanguage = lang);
  }

  /**
   * Cleans up subscriptions when the component is destroyed.
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Opens the Data Protection dialog in full-screen mode.
   */
  openDataProtection(): void {
    const cfg = new MatDialogConfig();
    cfg.width = '99vw';
    cfg.height = '100vh';
    cfg.autoFocus = false;
    cfg.panelClass = 'custom-dialog';
    if (!this.dialog.openDialogs.length) {
      this.dialog.open(DataProtectionComponent, cfg);
    }
  }

  /**
   * Opens the Imprint dialog with predefined dimensions.
   */
  openImprint(): void {
    const cfg = new MatDialogConfig();
    cfg.width = '600px';
    cfg.height = '460px';
    cfg.autoFocus = true;
    cfg.panelClass = 'custom-dialog';
    if (!this.dialog.openDialogs.length) {
      this.dialog.open(ImprintComponent, cfg);
    }
  }
}
