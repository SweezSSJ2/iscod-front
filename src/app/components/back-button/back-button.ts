import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  templateUrl: './back-button.html',
  styleUrl: './back-button.scss'
})
export class BackButton {

  private location = inject(Location);
  private router = inject(Router);

  fallback = input<string[]>(['/offices']);

  goBack(): void {
    const hasPreviousPage = (history.state?.navigationId ?? 1) > 1;

    if (hasPreviousPage) {
      this.location.back();
    } else {
      this.router.navigate(this.fallback());
    }
  }
}