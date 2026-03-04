/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitItemDiv } from './pages/produit-item-div/produit-item-div';
import { ProduitList } from './pages/produit-list/produit-list';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, ProduitList],
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LAB_NG_IPSL';
}*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LAB_NG_IPSL';
}
