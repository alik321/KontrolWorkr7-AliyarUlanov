import { Component} from '@angular/core';
import {Items} from "../shared/items.module";
import {Event} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent{

  order = new Items();

  getData(){
    this.order.orders.forEach(ord=>{
      console.log(ord.name);
    })
  }


}
