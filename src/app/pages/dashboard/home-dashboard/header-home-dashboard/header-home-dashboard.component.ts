import { Component, inject, input } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../../../core/services/mytranslate/mytranslate.service';
@Component({
  selector: 'app-header-home-dashboard',
  imports: [TranslatePipe],
  templateUrl: './header-home-dashboard.component.html',
  styleUrl: './header-home-dashboard.component.css',
})
export class HeaderComponent {
  private readonly mytranslateService = inject(MytranslateService);

  readonly translateService = inject(TranslateService);
  // numberDetails = input<any>();

  isDropdownOpen = false;

  changeLanguage(lang: string) {
    this.mytranslateService.changeLang(lang);
  }

  toggleDropDown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Close dropdown after selection
  }
}
