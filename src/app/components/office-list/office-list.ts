import { RouterLink } from '@angular/router';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Office } from '../../models/office.model';
import { OfficeService } from '../../services/office-service';
import { OfficeForm } from '../office-form/office-form';

@Component({
  selector: 'app-office-list',
  standalone: true,
  imports: [
    RouterLink,
    OfficeForm
  ],
  templateUrl: './office-list.html',
  styleUrl: './office-list.scss'
})
export class OfficeList implements OnInit {

  private officeService = inject(OfficeService);

  offices = signal<Office[]>([]);

  ngOnInit(): void {
    this.loadOffices();
  }

  loadOffices(): void {
    this.officeService.getAllOffices().subscribe({
      next: (data: Office[]) => {
        this.offices.set(data);
        console.log('Liste des offices actualisée :', data);
      },
      error: (error) => {
        console.error('Erreur :', error);
      }
    });
  }

  deleteOffice(id: string, name: string): void {

    const confirmation = confirm(
      `Voulez-vous vraiment supprimer l'office "${name}" ?`
    );

    if (!confirmation) {
      return;
    }

    this.officeService.deleteOffice(id).subscribe({
      next: () => {
        console.log('Office supprimé :', name);

        this.loadOffices();
      },
      error: (error) => {
        console.error('Erreur lors de la suppression :', error);
        alert('Impossible de supprimer cet office.');
      }
    });
  }
}