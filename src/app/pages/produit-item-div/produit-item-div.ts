import { Component, Input } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { PRODUITS } from '../../data/produit.data';

@Component({
  selector: 'app-produit-item-div',
  imports: [],
  templateUrl: './produit-item-div.html',
  styleUrl: './produit-item-div.scss',
})
export class ProduitItemDiv {

  @Input()
  produit: Produit | undefined;


  // produit: Produit = PRODUITS[0];

}
