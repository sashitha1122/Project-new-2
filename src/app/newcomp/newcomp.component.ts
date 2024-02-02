import { Fruit } from "./../fruit";
import { FRUITS } from "./../fruit-lists";
import { Component, OnInit  } from "@angular/core";

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrl: './newcomp.component.css'
})
export class NewcompComponent implements OnInit {

   fruit = FRUITS;
   selectedFruit: Fruit;

   constructor() { }
   
   ngOnInit(): void {
     
   }

   onSelect(fruit: Fruit): void{
    this.selectedFruit = fruit;
   }
}
