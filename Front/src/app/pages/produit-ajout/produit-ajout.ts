/*import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Produit} from '../../models/produit.model';
import {ProduitService} from '../../services/produit-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit-ajout',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './produit-ajout.html',
  styleUrl: './produit-ajout.scss',
})
export class ProduitAjout {


produitFrom = new FormGroup({
  nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
  prix: new FormControl('', [Validators.required, Validators.min(1)]),
  quantite: new FormControl('', [Validators.required, Validators.min(0)]),
  description: new FormControl(''),
});
    constructor(private produitService: ProduitService, private router: Router) {
    }

    ajoutProduit() {
  if (this.produitFrom.valid) {
    const formValue = this.produitFrom.value;
    const produit: Produit = {
      nom: formValue.nom!,
      prix: Number(formValue.prix),
      quantite: Number(formValue.quantite),
      description: formValue.description || ''
    };

    this.produitService.add(produit).subscribe(() => {
      this.router.navigate(['/produits']);
    });
  } else {
    console.log("Formulaire invalide !");
  }
}

}*/


// src/app/pages/produit-ajout/produit-ajout.ts
/*import { Component } from '@angular/core';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit-ajout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './produit-ajout.html',
  styleUrls: ['./produit-ajout.scss'],
})
export class ProduitAjout {
  produit: Produit = { id: 0, nom: '', prix: 0, quantite: 0, description: '' };
  errorMessage = '';

  constructor(private produitService: ProduitService, private router: Router) {}

  ajouter() {
    this.produitService.add(this.produit).subscribe({
      next: () => this.router.navigate(['/produits']),
      error: (err) => this.errorMessage = err.message
    });
  }
}*/

/*import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../services/produit-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-ajout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './produit-ajout.html',
})
export class ProduitAjout {

  produitFrom = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prix: new FormControl(0, [Validators.required, Validators.min(1)]),
    quantite: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('')
  });

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) {}

  ajoutProduit() {
    if (this.produitFrom.valid) {

      const produit: Produit = {
        id: 0,
        nom: this.produitFrom.value.nom!,
        prix: Number(this.produitFrom.value.prix),
        quantite: Number(this.produitFrom.value.quantite),
        description: this.produitFrom.value.description || ''
      };

      this.produitService.add(produit).subscribe(() => {
        this.router.navigate(['/produits']);
      });

    } else {
      console.log("Formulaire invalide !");
    }
  }
}*/


/*import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-produit-ajout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './produit-ajout.html',
  styleUrls: ['./produit-ajout.scss'],
})
export class ProduitAjout {
  produitForm: FormGroup;
  messageSucces: string = '';

  constructor(private produitService: ProduitService, private router: Router) {
    this.produitForm = new FormGroup({
      nom: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [this.nomUniqueAsyncValidator()],
        updateOn: 'blur',
      }),
      prix: new FormControl<number | null>(null, { 
        nonNullable: false, 
        validators: [Validators.required, Validators.min(1)] 
      }),
      quantite: new FormControl<number | null>(null),
      description: new FormControl(''),
    });
  }

  ajoutProduit() {
    if (this.produitForm.invalid) return;

    const formValue = this.produitForm.value;
    const produit: Produit = {
      nom: formValue.nom!,
      prix: Number(formValue.prix),
      quantite: formValue.quantite ?? 0,
      description: formValue.description ?? '',
    };

    this.produitService.add(produit).subscribe(() => {
      this.messageSucces = 'Produit ajouté avec succès !';

      setTimeout(() => {
        this.router.navigate(['/produits']);
      }, 2000);
    });
  }

  nomUniqueAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.produitService.nomExisteObservable(control.value).pipe(
        map(exists => (exists ? { nomUnique: true } : null))
      );
    };
  }
}*/

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProduitService } from '../../services/produit-service.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-produit-ajout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './produit-ajout.html',
  styleUrls: ['./produit-ajout.scss'],
})
export class ProduitAjout {
  produitForm: FormGroup;
  messageSucces: string = '';

  constructor(private produitService: ProduitService, private router: Router) {
    this.produitForm = new FormGroup({
      nom: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [this.nomUniqueAsyncValidator()],
        updateOn: 'blur',
      }),
      prix: new FormControl<number | null>(null, { 
        validators: [Validators.required, Validators.min(1)],
        nonNullable: false
      }),
      quantite: new FormControl<number>(0, {
  validators: [Validators.required, Validators.min(0)],
  nonNullable: true
}),
      description: new FormControl(''),
    });
  }

  ajoutProduit() {
  if (this.produitForm.invalid) return;

  const formValue = this.produitForm.value;

  const produit: Produit = {
    nom: formValue.nom!,
    prix: Number(formValue.prix),
    quantite: formValue.quantite ?? 0,
    description: formValue.description ?? '',
  };

  this.produitService.add(produit).subscribe({
    next: () => {
      // ✅ Message affiché
      this.messageSucces = 'Produit ajouté avec succès !';

      // ⏳ Attendre 2 secondes
      setTimeout(() => {
        // Effacer message
        this.messageSucces = '';

        // 🔁 Redirection vers la liste
        this.router.navigate(['/produits']);
      }, 2000);
    },
    error: (err: string) => {
      this.messageSucces = err || 'Erreur lors de l\'ajout';
    }
  });
}

  nomUniqueAsyncValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return this.produitService.nomExisteObservable(control.value).pipe(
      map(exists => (exists ? { nomUnique: true } : null))
    );
  };
}
}