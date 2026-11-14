import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceService } from '../../services/workspace-service';
import { Workspace } from '../../models/workspace.model';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [],
  templateUrl: './office.html',
  styleUrl: './office.scss'
})
export class Office implements OnInit {

  private route = inject(ActivatedRoute);
  private workspaceService = inject(WorkspaceService);

  workspaces = signal<Workspace[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {
    const officeId = this.route.snapshot.paramMap.get('officeId');

    if (!officeId) {
      this.errorMessage.set('Identifiant de l’office introuvable.');
      this.loading.set(false);
      return;
    }

    this.workspaceService.getAllWorkspacesByOffice(officeId).subscribe({
      next: (data) => {
        this.workspaces.set(data);
        this.loading.set(false);
        console.log('Workspaces récupérés :', data);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des salles :', error);
        this.errorMessage.set('Impossible de récupérer les salles.');
        this.loading.set(false);
      }
    });
  }
}