/* import { Component } from '@angular/core';

@Component({
  selector: 'app-produit-modifier',
  imports: [],
  templateUrl: './produit-modifier.html',
  styleUrl: './produit-modifier.scss',
})
export class ProduitModifier {

}*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-produit-modifier',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './produit-modifier.html',
  styleUrls: ['./produit-modifier.scss'],
})
export class ProduitModifier implements OnInit {

  produitForm!: FormGroup;
  produitInitial!: Produit;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.produitService.getById(id).subscribe(produit => {
    if (!produit) {
      // Produit non trouvé -> redirige vers Error404
      this.router.navigate(['/404']);
      return;
    }

    this.produitInitial = { ...produit };

    this.produitForm = new FormGroup({
      nom: new FormControl(produit.nom, [Validators.required]),
      prix: new FormControl(produit.prix, [Validators.required, Validators.min(1)]),
      quantite: new FormControl(produit.quantite, {
        validators: [Validators.min(0)],
        nonNullable: true
      }),
      description: new FormControl(produit.description),
    });
  });
}

 modifierProduit() {
  if (this.produitForm.invalid) return;

  const valeur = this.produitForm.value;

  // Vérification quantité négative
  if (valeur.quantite < 0) {
    this.message = 'La quantité ne peut pas être négative !';
    return;
  }

  // Vérification si aucune modification
  const aucuneModification =
    valeur.nom === this.produitInitial.nom &&
    valeur.prix === this.produitInitial.prix &&
    valeur.quantite === this.produitInitial.quantite &&
    valeur.description === this.produitInitial.description;

  if (aucuneModification) {
    this.message = 'Aucune modification détectée.';
    setTimeout(() => {
      this.message = '';
      this.router.navigate(['/produits']);
    }, 2000);
    return;
  }

  const produitModifie: Produit = {
    id: this.produitInitial.id,
    nom: valeur.nom!,
    prix: Number(valeur.prix),
    quantite: valeur.quantite,
    description: valeur.description ?? '',
  };

  this.produitService.update(produitModifie).subscribe({
    next: () => {
      this.message = 'Modification prise en compte !';

      setTimeout(() => {
        this.message = '';
        this.router.navigate(['/produits']);
      }, 2000);
    },
    error: (err: string) => {
      this.message = err || 'Erreur lors de la modification';
    }
  });
}
}