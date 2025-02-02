import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotfoundComponent implements AfterViewInit {
  private readonly ngxSpinnerService = inject(NgxSpinnerService);

  ngAfterViewInit(): void {
    this.ngxSpinnerService.show('loading');

    setTimeout(() => {
      this.ngxSpinnerService.hide('loading');
    }, 600);
  }
}
