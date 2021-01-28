import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: {
      name : 'angular-course'
    },
    desc: 'Angular Course'
  };
  title1 = 'angular-course';
}
