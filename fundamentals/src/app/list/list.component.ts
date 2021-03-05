import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  brews: Object;

  // Inject HttpClient into component
  constructor(private _http: HttpService) {}

  // lifecycle hook that is fired when the component loads
  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      this.brews = data; // observable
      console.log(this.brews); // array of objects
    });
  }
}
