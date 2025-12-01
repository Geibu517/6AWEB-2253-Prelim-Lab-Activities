import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products = [
  { name: "Scarlet & Violet Booster Pack", price: 180, stock: 30 },
  { name: "Obsidian Flames Booster Pack", price: 200, stock: 25 },
  { name: "Paldean Fates Elite Trainer Box", price: 2500, stock: 5 },
  { name: "151 Booster Pack", price: 350, stock: 10 },
  { name: "Violet ex Booster Box", price: 5200, stock: 2 }
];


}
