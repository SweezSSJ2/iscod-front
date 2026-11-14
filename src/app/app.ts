import { Component, signal } from '@angular/core';
import { OfficeList } from './components/office-list/office-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    OfficeList, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('coworkia-front');
}
