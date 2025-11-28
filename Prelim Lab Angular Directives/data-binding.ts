import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demo"
  title = "My First App"
  description = "This is my new Angular Application"

  //property binding
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WiX4-RkatB58A0RpGOAbanyWwSaGuEd-9g&s';
  w = 150;
  h = 150;
  altText = 'Bigass Groudon'
  textColor = 'violet';
  isHighlighted = true;
  yourName = '';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
