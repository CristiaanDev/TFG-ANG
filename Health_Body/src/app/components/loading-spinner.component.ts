import { Component } from '@angular/core';
import { UtilesService } from '../services/utiles.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div
      *ngIf="utiles.isLoading()"
      class=" fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50"
    >
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [],
})
export class LoadingSpinnerComponent {
  constructor(public utiles: UtilesService) {}
}
