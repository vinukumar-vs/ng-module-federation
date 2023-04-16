import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatButt }

@Component({
  selector: 'lib-lib-utils',
  template: `
    <p>
      lib-utils works!
    </p>

    <nav>
      <!-- <a class="card" href="http://localhost:4200">
        <span>Home</span>
        <p></p>
      </a> -->

      <!-- <a class="card"  href="http://localhost:4201">
        Restaurants
        <p></p>
      </a> -->

      <!-- <a class="card"  href="{{envVariable.APP_ORDERS}}">
        Orders
        <p></p>
      </a> -->
      <a mat-button href="http://localhost:4200">Home</a>
      <a mat-button href="http://localhost:4201">Restaurants</a>
      <a mat-button href="http://localhost:4202">Orders</a>
      <!-- <a clas="card" href="http://localhost:4202"></a> -->
    </nav>
  `,
  styles: [
  ]
})
export class LibUtilsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
