import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CustomerDataService } from '../../core/services/customer-data/customer-data.service';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  imports: [HomeDashboardComponent, TranslatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements AfterViewInit {
  public readonly customerDataService = inject(CustomerDataService);
  private readonly ngxSpinnerService = inject(NgxSpinnerService);

  ngAfterViewInit(): void {
    this.ngxSpinnerService.show('loading');

    setTimeout(() => {
      this.ngxSpinnerService.hide('loading');
    }, 600);
  }
}
