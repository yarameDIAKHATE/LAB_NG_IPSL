/*import { Component, Input } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { PRODUITS } from '../../data/produit.data';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-produit-item-div',
  imports: [
    RouterLink
  ],
  standalone:true,
  templateUrl: './produit-item-div.html',
  styleUrl: './produit-item-div.scss',
})
export class ProduitItemDiv {

  @Input()
  produit: Produit | undefined;


  // produit: Produit = PRODUITS[0];

}*/

/*import { Component, Input } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-item-div',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produit-item-div.html',
  styleUrls: ['./produit-item-div.scss'],
})
export class ProduitItemDiv {
  @Input()
  produit!: Produit; // On suppose que le produit est toujours défini
}*/


/*import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-item-div',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './produit-item-div.html',
  styleUrls: ['./produit-item-div.scss'],
})
export class ProduitItemDiv {
  @Input() produit?: Produit;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    if (this.produit) {
      this.delete.emit(this.produit.id);
    }
  }
}*/

/*import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-item-div',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './produit-item-div.html',
  styleUrls: ['./produit-item-div.scss'],
})
export class ProduitItemDiv {
  @Input() produit: Produit | undefined;
  @Output() supprimer = new EventEmitter<number>();

  supprimerProduit(): void {
    if (this.produit) {
      this.supprimer.emit(this.produit.id);
    }
  }
}*/


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produit-item-div',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produit-item-div.html',
  styleUrls: ['./produit-item-div.scss']
})
export class ProduitItemDiv {
  @Input() produit?: Produit;
  @Output() supprimer = new EventEmitter<number>();

  onSupprimer() {
    if (this.produit?.id) {
      this.supprimer.emit(this.produit.id);
    }
  }
}