/*import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../services/produit-service.service';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  imports: [ProduitItemDiv],
  templateUrl: './produit-list.html',
  styleUrl: './produit-list.scss',
})
export class ProduitList implements OnInit{
  
  produits: Produit[] = [];
  loading = false;
  errorMessage = "";


  constructor(private produitService: ProduitService) {  }

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(){
    this.loading = true;
    this.produitService.getAll().subscribe({
      next:(data: Produit[]) => {
        this.produits = data;
      },
      error:(err:any) => {
        this.errorMessage = `Voici une erreur: ${err}`;
        this.loading = false;
      },
      complete:() => {
        this.loading = false;
      }
    });
  }
trackById(index: number, produit: Produit): number {
  return produit.id!;
}

}*/

/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProduitItemDiv], // ✅ CommonModule pour *ngIf et *ngFor, ProduitItemDiv pour le composant enfant
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];        // liste des produits
  loading: boolean = false;        // affichage du spinner
  errorMessage: string = '';       // message d'erreur

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data: Produit[]) => {
        this.produits = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des produits', err);
        this.errorMessage = 'Impossible de charger les produits';
        this.loading = false;
      },
    });
  }

  // Fonction pour le *ngFor trackBy
  trackById(index: number, produit: Produit): number {
  return produit.id!; // le "!" dit à TypeScript : fais-moi confiance, ce n'est jamais undefined
}
}*/



/*// src/app/pages/produit-list/produit-list.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { RouterModule } from '@angular/router';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProduitItemDiv],
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading = false;
  errorMessage = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits() {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data) => {
        this.produits = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    });
  }

  trackById(index: number, produit: Produit) {
    return produit.id;
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, ProduitItemDiv],
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading = false;
  errorMessage = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: produits => {
        this.produits = produits;
        this.loading = false;
      },
      error: err => {
        this.errorMessage = 'Impossible de charger les produits';
        this.loading = false;
      },
    });
  }

  supprimerProduit(id: number) {
    this.produitService.delete(id).subscribe(() => {
      this.produits = this.produits.filter(p => p.id !== id);
    });
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // pour ngIf et ngFor
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, ProduitItemDiv],
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data: Produit[]) => {
        this.produits = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des produits';
        this.loading = false;
      },
    });
  }

 trackById(index: number, produit: Produit): number {
  return produit.id!;
}

  // Supprimer un produit
  supprimerProduit(id: number): void {
    this.produitService.delete(id).subscribe({
      next: () => {
        this.produits = this.produits.filter((p) => p.id !== id);
      },
      error: (err) => {
        this.errorMessage = 'Impossible de supprimer le produit : ' + err;
      },
    });
  }
}

/*import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../services/produit-service.service';
import { CommonModule } from '@angular/common';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, ProduitItemDiv],
  templateUrl: './produit-list.html',
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading = false;
  errorMessage = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data) => { this.produits = data; this.loading = false; },
      error: () => { this.errorMessage = 'Erreur lors du chargement'; this.loading = false; }
    });
  }

  trackById(index: number, produit: Produit): number {
    return produit.id!;
  }

  supprimerProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.delete(id).subscribe({
        next: () => { this.produits = this.produits.filter(p => p.id !== id); },
        error: () => { alert('Erreur suppression'); }
      });
    }
  }
}*/



/*import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  imports: [ProduitItemDiv],
  standalone: true,
  templateUrl: './produit-list.html',
  styleUrl: './produit-list.scss'
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading = false;
  errorMessage = "";

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits() {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data: Produit[]) => { this.produits = data; },
      error: (err: any) => { this.errorMessage = `Erreur: ${err}`; this.loading = false; },
      complete: () => { this.loading = false; }
    });
  }
}*/


/*import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, ProduitItemDiv],
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading = false;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
  this.loading = true;
  this.produitService.getAll().subscribe({
    next: (data) => {
      console.log('Produits reçus:', data); // <-- utile pour debug
      this.produits = data;
      this.loading = false;
    }
  });
}

  deleteProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.delete(id).subscribe();
    }
  }

  trackById(index: number, produit: Produit): number {
    return produit.id!;
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, ProduitItemDiv],
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  loading = false;
  messageSuppression: string = ''; // message de confirmation

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    // Charge la liste des produits au démarrage
    this.loadProduits();
  }

  // Charge tous les produits depuis le backend
  loadProduits(): void {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data: Produit[]) => {
        console.log('Produits backend reçus :', data); // <-- debug
        this.produits = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement produits:', err);
        this.loading = false;
      },
    });
  }

  // Supprime un produit et recharge la liste
  deleteProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.delete(id).subscribe({
        next: () => {
          this.messageSuppression = 'Produit supprimé avec succès !';
          this.loadProduits(); // Recharge automatiquement la liste
          setTimeout(() => {
            this.messageSuppression = '';
          }, 2000);
        },
        error: () => {
          this.messageSuppression = 'Erreur lors de la suppression';
          setTimeout(() => {
            this.messageSuppression = '';
          }, 2000);
        },
      });
    }
  }

  // Méthode pour ngFor trackBy
  trackById(index: number, produit: Produit): number {
    return produit.id!;
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { ProduitItemDiv } from '../produit-item-div/produit-item-div';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, ProduitItemDiv, RouterModule],
  templateUrl: './produit-list.html',
  styleUrls: ['./produit-list.scss'],
})
export class ProduitList implements OnInit {
  produits: Produit[] = [];
  produitsFiltres: Produit[] = [];
  loading = false;
  messageSuppression: string = '';
  searchControl: FormControl = new FormControl('');

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.loadProduits();

    // Filtrage en direct
    this.searchControl.valueChanges.subscribe(term => {
      this.filtrerProduits(term);
    });
  }

  loadProduits(): void {
    this.loading = true;
    this.produitService.getAll().subscribe({
      next: (data: Produit[]) => {
        this.produits = data;
        this.produitsFiltres = data;
        this.loading = false;
      },
      error: err => {
        console.error('Erreur chargement produits:', err);
        this.loading = false;
      },
    });
  }

  filtrerProduits(term: string) {
    if (!term) {
      this.produitsFiltres = [...this.produits];
      return;
    }

    const mot = term.toLowerCase();
    this.produitsFiltres = this.produits.filter(p =>
      (p.id?.toString().includes(mot) ?? false) ||
      p.nom.toLowerCase().includes(mot) ||
      p.prix.toString().includes(mot) ||
      p.quantite.toString().includes(mot) ||
      (p.description?.toLowerCase().includes(mot) ?? false)
    );
  }

  deleteProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.delete(id).subscribe({
        next: (message: string) => {
          this.messageSuppression = message; // Message du backend
          this.loadProduits();
          setTimeout(() => { this.messageSuppression = ''; }, 2000);
        },
        error: (err) => {
          this.messageSuppression = err.error || 'Erreur lors de la suppression';
          setTimeout(() => { this.messageSuppression = ''; }, 2000);
        },
      });
    }
  }

  ajouterProduit(): void {
    this.router.navigate(['/produits/ajout']);
  }

  modifierProduit(id: number) {
    this.router.navigate(['/produits/modifier', id]);
  }

  

  //  méthode pour rechercher par ID
  rechercherParId() {
    const id = Number(this.searchControl.value);
    if (!id) return;

    const produit = this.produits.find(p => p.id === id);
    if (produit) {
      this.router.navigate(['/produits/detail', id]);
    } else {
      this.messageSuppression = `Aucun produit trouvé avec l'ID ${id}`;
      setTimeout(() => this.messageSuppression = '', 2000);
    }

    this.searchControl.setValue('');
  }

  trackById(index: number, produit: Produit): number {
    return produit.id!;
  }
}