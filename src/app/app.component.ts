import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  address: Object;

  getAddress(place: Object) {
    this.address = place['formatted_address'];
  }
}
