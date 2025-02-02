import { Component, inject, input } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-statistics-home-dashboard',
  imports: [TranslatePipe],
  templateUrl: './statistics-home-dashboard.component.html',
  styleUrl: './statistics-home-dashboard.component.css',
})
export class StatisticsHomeDashboardComponent {
  readonly translateService = inject(TranslateService);

  numberDetails = input<any>();
}
