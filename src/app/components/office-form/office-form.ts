import { Component, inject, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OfficeService } from '../../services/office-service';

@Component({
  selector: 'app-office-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './office-form.html',
  styleUrl: './office-form.scss'
})

export class OfficeForm {

  private officeService = inject(OfficeService);

  officeCreated = output<void>();

  title = signal('Ajouter un espace de coworking');

  office = {
    name: '',
    address: ''
  };

  loading = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  save(): void {
    if (!this.office.name.trim() || !this.office.address.trim()) {
      this.errorMessage.set('Veuillez remplir tous les champs.');
      return;
    }

    this.loading.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    this.officeService.createOffice(this.office).subscribe({
      next: () => {
        this.successMessage.set('Office créé avec succès !');

        this.office = {
          name: '',
          address: ''
        };

        this.loading.set(false);

        this.officeCreated.emit();
      },
      error: (error) => {
        console.error('Erreur lors de la création :', error);
        this.errorMessage.set('Une erreur est survenue lors de la création.');
        this.loading.set(false);
      }
    });
  }

  cancel(): void {
    this.office = {
      name: '',
      address: ''
    };

    this.successMessage.set('');
    this.errorMessage.set('');
  }
}