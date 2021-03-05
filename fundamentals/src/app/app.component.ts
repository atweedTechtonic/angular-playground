import { Component } from '@angular/core';

//The component decorator (properties for component)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fundamentals';
}
