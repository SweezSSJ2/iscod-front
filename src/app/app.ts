import { Component, signal } from '@angular/core';
import { OfficeList } from './components/office-list/office-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { OfficeForm } from './components/office-form/office-form';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    OfficeForm,
    OfficeList,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('coworkia-front');
}
