import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('1 Test recipe', '1test recipe contains food', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('2 Test recipe', '2test recipe contains food', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Vegetables-Meat-Mushrooms-Meat-Skewer-Gemuesepiess-1440105.jpg'),
    new Recipe('3 Test recipe', '3test recipe contains food', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
