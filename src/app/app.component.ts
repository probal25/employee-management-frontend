import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-client-end';
  // tslint:disable-next-line: variable-name
  current_year: number = new Date().getFullYear();
}
