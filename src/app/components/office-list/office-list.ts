import { RouterLink } from '@angular/router';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Office } from '../../models/office.model';
import { OfficeService } from '../../services/office-service';

@Component({
  selector: 'app-office-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './office-list.html',
  styleUrl: './office-list.scss'
})
export class OfficeList implements OnInit {

  private officeService = inject(OfficeService);

  offices = signal<Office[]>([]);

  ngOnInit(): void {
    this.officeService.getAllOffices().subscribe({
      next: (data: Office[]) => {
        console.log('Données reçues :', data);

        this.offices.set(data);

        console.log('Nombre d offices :', this.offices().length);
      },
      error: (error) => {
        console.error('Erreur :', error);
      }
    });
  }
}