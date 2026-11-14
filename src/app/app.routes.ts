import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'offices',
    loadComponent: () =>
      import('./components/office-list/office-list')
        .then(m => m.OfficeList)
  },
  {
    path: 'offices/:officeId',
    loadComponent: () =>
      import('./components/office/office')
        .then(m => m.Office)
  },
  {
    path: 'offices/:officeId/workspaces/:workspaceId',
    loadComponent: () =>
      import('./components/workspace/workspace')
        .then(m => m.Workspace)
  },
  {
    path: 'computers/:computerId/book',
    loadComponent: () =>
      import('./components/booking-form/booking-form')
        .then(m => m.BookingForm)
  },
  {
    path: '',
    redirectTo: 'offices',
    pathMatch: 'full'
  }
];