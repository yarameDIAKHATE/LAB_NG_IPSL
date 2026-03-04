/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produit-details.html',
  styleUrls: ['./produit-details.scss'],
})
export class ProduitDetails implements OnInit {
  produit?: Produit;
  erreurMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    this.produitService.getById(id).subscribe({
      next: p => {
        if (p) {
          this.produit = p;
        } else {
          // Si le produit n’existe pas
          this.erreurMessage = `Produit avec l'ID ${id} introuvable !`;
          // OU tu peux faire : this.router.navigate(['/error404']);
        }
      },
      error: () => {
        this.erreurMessage = 'Une erreur est survenue lors de la récupération du produit';
      }
    });
  }

  retour() {
    this.router.navigate(['/produits']);
  }
}*/

// src/app/pages/produit-details/produit-details.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produit-details.html',
  styleUrls: ['./produit-details.scss'],
})
export class ProduitDetails implements OnInit {
  produit?: Produit;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.params['id']);
  this.produitService.getById(id).subscribe({
    next: (data: Produit | undefined) => {
      if (!data) {
        // Produit non trouvé -> redirige vers Error404
        this.router.navigate(['/404']);
      } else {
        this.produit = data;
      }
    },
    error: (err: any) => {
      console.error('Erreur :', err);
      this.router.navigate(['/404']);
    }
  });
}

  retour() {
    this.router.navigate(['/produits']);
  }
}