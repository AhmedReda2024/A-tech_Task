import {
  Component,
  EventEmitter,
  Input,
  input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PaginationComponent } from '../../../../shared/components/ui/pagination/pagination.component';

@Component({
  selector: 'app-table-home-dashboard',
  imports: [TranslatePipe, PaginationComponent],
  templateUrl: './table-home-dashboard.component.html',
  styleUrl: './table-home-dashboard.component.css',
})
export class TableHomeDashboardComponent {
  @Input() tableData: any[] = []; // Table data passed from the parent component
  @Input() totalItems: number = 0; // Total number of items
  @Input() currentPage: number = 1; // Current page number
  @Input() itemsPerPage: number = 10; // Number of items per page

  @Output() pageChanged = new EventEmitter<number>(); // Emit event when page changes

  get startItemIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endItemIndex() {
    return this.startItemIndex + this.itemsPerPage;
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.pageChanged.emit(page); // Emit the page change to the parent
  }
}
