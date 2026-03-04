/*import { delay, Observable, of } from "rxjs";
import { PRODUITS } from "../data/produit.data";
import { Produit } from "../models/produit.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private produits: Produit[] = PRODUITS;

  getAll(): Observable<Produit[]> {
    return of(this.produits).pipe(delay(5000));
  }

  getById(id: number): Observable<Produit | undefined> {
    return of(this.produits.find(p => p.id === id)).pipe(delay(500));
  }

  add(produit: Produit): Observable<Produit> {
    produit.id = Date.now();
    this.produits.push(produit);
    return of(produit).pipe(delay(500));
  }

  update(produit: Produit): Observable<Produit> {
    const index = this.produits.findIndex(p => p.id === produit.id);
    this.produits[index] = produit;
    return of(produit).pipe(delay(500));
  }

  delete(id: number): Observable<boolean> {
    this.produits = this.produits.filter(p => p.id !== id);
    return of(true).pipe(delay(500));
  }
}*/

/*import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Produit } from '../models/produit.model';
import { PRODUITS } from '../data/produit.data';

@Injectable({
  providedIn: 'root', // permet d’injecter le service partout
})
export class ProduitService {
  private produits: Produit[] = [...PRODUITS]; // copie pour éviter de modifier la source directement

  // 🔹 Récupérer tous les produits
  getAll(): Observable<Produit[]> {
    return of(this.produits).pipe(delay(500)); // délai simulé pour l’asynchronicité
  }

  // 🔹 Récupérer un produit par son id
  getById(id: number): Observable<Produit | undefined> {
    const produit = this.produits.find(p => p.id === id);
    return of(produit).pipe(delay(300));
  }

  // 🔹 Ajouter un produit
  add(produit: Produit): Observable<Produit> {
    produit.id = Date.now(); // génère un id unique basé sur le timestamp
    this.produits.push(produit);
    return of(produit).pipe(delay(300));
  }

  // 🔹 Mettre à jour un produit existant
  update(produit: Produit): Observable<Produit> {
    const index = this.produits.findIndex(p => p.id === produit.id);
    if (index !== -1) {
      this.produits[index] = produit;
    }
    return of(produit).pipe(delay(300));
  }

  // 🔹 Supprimer un produit par id
  delete(id: number): Observable<boolean> {
    const initialLength = this.produits.length;
    this.produits = this.produits.filter(p => p.id !== id);
    return of(this.produits.length < initialLength).pipe(delay(300));
  }
}*/



/*// src/app/services/produit-service.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Produit } from '../models/produit.model';
import { PRODUITS } from '../data/produit.data';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produits: Produit[] = [...PRODUITS];

  // 🔹 Liste de tous les produits
  getAll(): Observable<Produit[]> {
    return of(this.produits).pipe(delay(500)); // simulate server delay
  }

  // 🔹 Produit par ID
  getById(id: number): Observable<Produit> {
    const produit = this.produits.find(p => p.id === id);
    if (!produit) return throwError(() => new Error('Produit introuvable'));
    return of(produit).pipe(delay(300));
  }

  // 🔹 Ajouter un produit
  add(produit: Produit): Observable<Produit> {
    if (!produit.nom || produit.prix < 0 || produit.quantite < 0) {
      return throwError(() => new Error('Champs invalides'));
    }
    produit.id = Date.now();
    this.produits.push(produit);
    return of(produit).pipe(delay(300));
  }

  // 🔹 Modifier un produit
  update(produit: Produit): Observable<Produit> {
    const index = this.produits.findIndex(p => p.id === produit.id);
    if (index === -1) return throwError(() => new Error('Produit introuvable'));
    if (!produit.nom || produit.prix < 0 || produit.quantite < 0) {
      return throwError(() => new Error('Champs invalides'));
    }
    this.produits[index] = produit;
    return of(produit).pipe(delay(300));
  }

  // 🔹 Supprimer un produit
  delete(id: number): Observable<boolean> {
    const index = this.produits.findIndex(p => p.id === id);
    if (index === -1) return throwError(() => new Error('Produit introuvable'));
    this.produits.splice(index, 1);
    return of(true).pipe(delay(300));
  }
}*/


/*import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { PRODUITS } from "../data/produit.data";
import { Produit } from "../models/produit.model";

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private produits: Produit[] = [...PRODUITS];

  getAll(): Observable<Produit[]> {
    return of(this.produits).pipe(delay(500));
  }

  getById(id: number): Observable<Produit | undefined> {
    return of(this.produits.find(p => p.id === id)).pipe(delay(500));
  }

  add(produit: Produit): Observable<Produit> {
    const lastId = this.produits.length ? Math.max(...this.produits.map(p => p.id!)) : 0;
    produit.id = lastId + 1;
    this.produits.push(produit);
    return of(produit).pipe(delay(500));
  }

  update(produit: Produit): Observable<Produit> {
    const index = this.produits.findIndex(p => p.id === produit.id);
    if (index >= 0) this.produits[index] = produit;
    return of(produit).pipe(delay(500));
  }

  delete(id: number): Observable<boolean> {
    this.produits = this.produits.filter(p => p.id !== id);
    return of(true).pipe(delay(500));
  }

  
}*/
/*import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of } from "rxjs";
import { delay } from "rxjs/operators";
import { PRODUITS } from "../data/produit.data";
import { Produit } from "../models/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private localStorageKey = 'produits';
  private produits: Produit[] = [];
  private produitsSubject = new BehaviorSubject<Produit[]>([]);

  constructor() {
    const produitsStockes = localStorage.getItem(this.localStorageKey);

    if (produitsStockes) {
      this.produits = JSON.parse(produitsStockes);
    } else {
      this.produits = [...PRODUITS];
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.produits));
    }

    this.produitsSubject.next([...this.produits]);
  }

  getAll(): Observable<Produit[]> {
    return this.produitsSubject.asObservable().pipe(delay(200));
  }

  getById(id: number): Observable<Produit | undefined> {
    const produit = this.produits.find(p => p.id === id);
    return of(produit).pipe(delay(200));
  }

  add(produit: Produit): Observable<Produit> {
    const lastId = this.produits.length
      ? Math.max(...this.produits.map(p => p.id!))
      : 0;

    produit.id = lastId + 1;

    this.produits.push(produit);
    this.saveToLocalStorage();
    this.produitsSubject.next([...this.produits]);

    return of(produit).pipe(delay(200));
  }

  update(produit: Produit): Observable<Produit> {
    const index = this.produits.findIndex(p => p.id === produit.id);

    if (index !== -1) {
      this.produits[index] = produit;
      this.saveToLocalStorage();
      this.produitsSubject.next([...this.produits]);
    }

    return of(produit).pipe(delay(200));
  }

  delete(id: number): Observable<boolean> {
    this.produits = this.produits.filter(p => p.id !== id);
    this.saveToLocalStorage();
    this.produitsSubject.next([...this.produits]);

    return of(true).pipe(delay(200));
  }

  nomExisteObservable(nom: string): Observable<boolean> {
    const exists = this.produits.some(
      p => p.nom.toLowerCase() === nom.toLowerCase()
    );

    return of(exists).pipe(delay(100));
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.produits));
  }
}*/

/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:8080/api/produits'; // ton backend

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  getById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }

  add(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, produit);
  }

  update(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${produit.id}`, produit);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // ✅ Méthode à utiliser dans ton AsyncValidator
  nomExisteObservable(nom: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${nom}`);
  }
}*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient) { }

  // Récupérer tous les produits
  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl).pipe(
      catchError(err => this.handleError(err))
    );
  }

  // Récupérer un produit par ID
  getById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => this.handleError(err))
    );
  }

  // Ajouter un produit
  add(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, produit).pipe(
      catchError(err => this.handleError(err))
    );
  }

  // Mettre à jour un produit
  update(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${produit.id}`, produit).pipe(
      catchError(err => this.handleError(err))
    );
  }

  // Supprimer un produit

delete(id: number): Observable<string> {
  return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' }).pipe(
    catchError(err => this.handleError(err))
  );
}

  // Vérifier si un nom existe (exemple pour validation)
  nomExisteObservable(nom: string): Observable<boolean> {
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/exists/${nom}`).pipe(
      map(res => res.exists),
      catchError(() => throwError(() => new Error('Impossible de vérifier le nom')))
    );
  }

  // Gestion des erreurs
  private handleError(error: HttpErrorResponse): Observable<never> {
    let msg = 'Une erreur est survenue';
    if (error.error instanceof Blob) {
      // Convertir les erreurs JSON envoyées depuis Spring Boot
      return new Observable(sub => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const errObj = JSON.parse(reader.result as string);
            sub.error(errObj.message || msg);
          } catch {
            sub.error(msg);
          }
        };
        reader.readAsText(error.error);
      });
    }
    return throwError(() => error.error?.message || msg);
  }
}