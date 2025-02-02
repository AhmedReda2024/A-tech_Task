import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
import { CustomerDataService } from '../../../core/services/customer-data/customer-data.service';
import { StatisticsHomeDashboardComponent } from './statistics-home-dashboard/statistics-home-dashboard.component';
import { TableHomeDashboardComponent } from './table-home-dashboard/table-home-dashboard.component';
import { HeaderComponent } from './header-home-dashboard/header-home-dashboard.component';
import { FooterComponent } from '../../../core/layouts/footer/footer.component';

@Component({
  selector: 'app-home-dashboard',
  imports: [
    StatisticsHomeDashboardComponent,
    TableHomeDashboardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.css',
})
export class HomeDashboardComponent {
  public readonly customerDataService = inject(CustomerDataService);

  totalItems: number = 55; // Total items in your dataset (e.g., 55)
  itemsPerPage: number = 10; // Number of items per page
  currentPage: number = 1; // Current page number

  currentTableData: any[] = []; // Data to be displayed in the table

  constructor() {
    this.loadTableData();
  }

  loadTableData() {
    this.currentTableData = Array.from({ length: this.totalItems }, (_, i) => ({
      client: 'table.german_extermination_company',
      appointmentDate: '01/12/2024',
      cancellationDate: i % 2 === 0 ? '-' : '01/12/2024',
      appointmentOfficer: 'table.abdul_rahim_ismail_nasef',
      localMinutes: Math.floor(Math.random() * 10000).toString(),
      internationalMinutes: Math.floor(Math.random() * 500).toString(),
      amount: `${Math.floor(Math.random() * 100000)}`,
    }));
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    // Re-load or slice the table data based on the new page number
    this.loadTableData(); // In real scenario, you might want to fetch new data here.
  }
}
