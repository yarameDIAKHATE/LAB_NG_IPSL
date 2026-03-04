/*import { TestBed } from '@angular/core/testing';

import { ProduitServiceService } from './produit-service.service';

describe('ProduitServiceService', () => {
  let service: ProduitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

import { TestBed } from '@angular/core/testing';
import { ProduitService } from './produit-service.service';
import { Produit } from '../models/produit.model';

describe('ProduitService', () => {
  let service: ProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all produits', (done: DoneFn) => {
    service.getAll().subscribe(produits => {
      expect(produits.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return produit by id', (done: DoneFn) => {
    service.getById(1).subscribe(produit => {
      expect(produit).toBeTruthy();
      expect(produit?.id).toBe(1);
      done();
    });
  });

  it('should add a new produit', (done: DoneFn) => {
    const newProduit: Produit = {
      nom: 'Clavier',
      prix: 50,
      quantite: 10,
      description: 'Clavier mécanique'
    };

    service.add(newProduit).subscribe(addedProduit => {
      expect(addedProduit.id).toBeDefined();
      expect(addedProduit.nom).toBe('Clavier');

      // vérifier que le produit a été ajouté à la liste
      service.getAll().subscribe(allProduits => {
        const found = allProduits.find(p => p.id === addedProduit.id);
        expect(found).toBeTruthy();
        done();
      });
    });
  });

  it('should update a produit', (done: DoneFn) => {
    const updatedProduit: Produit = {
      id: 1,
      nom: 'Ordinateur Modifié',
      prix: 1300,
      quantite: 8,
      description: 'Modifié pour test'
    };

    service.update(updatedProduit).subscribe(prod => {
      expect(prod.nom).toBe('Ordinateur Modifié');

      service.getById(1).subscribe(p => {
        expect(p?.nom).toBe('Ordinateur Modifié');
        done();
      });
    });
  });

  it('should delete a produit', (done: DoneFn) => {
    const idToDelete = 2;

    service.delete(idToDelete).subscribe(result => {
      expect(result).toBeTrue();

      service.getById(idToDelete).subscribe(p => {
        expect(p).toBeUndefined();
        done();
      });
    });
  });
});
