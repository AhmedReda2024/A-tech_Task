import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;

  @Output() pageChanged = new EventEmitter<number>();
  @Output() itemsPerPageChanged = new EventEmitter<number>();

  // Calculate ranges for page numbers
  get pageRanges() {
    const ranges = [];
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    for (let i = 0; i < totalPages; i++) {
      const start = i * this.itemsPerPage + 1;
      const end = Math.min((i + 1) * this.itemsPerPage, this.totalItems);
      ranges.push({
        label: `${start}-${end}`,
        value: i + 1,
      });
    }
    return ranges;
  }

  get paginationArray(): number[] {
    return Array.from(
      { length: Math.min(5, Math.ceil(this.totalItems / this.itemsPerPage)) },
      (_, i) => i + 1
    );
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  onNextPage() {
    if (this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  onPageSelect(page: number) {
    this.pageChanged.emit(page);
  }

  onSelectPageChange(event: any) {
    const selectedPage = +event.target.value;
    this.pageChanged.emit(selectedPage);
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPageChanged.emit(event.target.value);
    this.pageChanged.emit(1); // Reset to page 1 when items per page change
  }
}
