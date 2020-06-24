import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [{id:1,name:"shirp",description:"Description shirp",price:0},{id:2,name:"number",description:"Description number",price:0}];

  share() {
    window.alert('The product has been shared!');
  }
  constructor() { }

  ngOnInit() {
  }

}
