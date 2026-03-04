/*import { Routes } from '@angular/router';

import {ProduitAjout} from './pages/produit-ajout/produit-ajout';
import {ProduitList} from './pages/produit-list/produit-list';
import {ProduitModifier} from './pages/produit-modifier/produit-modifier';
import {ProduitDetails} from './pages/produit-details/produit-details';
import {Error404} from './pages/error404/error404';

export const routes: Routes = [
  //{path:'',component:ProduitAjout},
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  {path:'produits/ajout',component:ProduitAjout},
  {path:'produits',component:ProduitList},
  {path:'produits/:id',component:ProduitModifier},
  
  //{path:'produits/detail',component:ProduitDetails},
  { path: 'produits/detail/:id', component: ProduitDetails },
  {path:'**',component:Error404},



];*/

/*import { Routes } from '@angular/router';
import { ProduitAjout } from './pages/produit-ajout/produit-ajout';
import { ProduitList } from './pages/produit-list/produit-list';
import { ProduitModifier } from './pages/produit-modifier/produit-modifier';
import { ProduitDetails } from './pages/produit-details/produit-details';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'produits/ajout', component: ProduitAjout },
  { path: 'produits', component: ProduitList },
  { path: 'produits/:id', component: ProduitModifier },
  { path: 'produits/detail/:id', component: ProduitDetails },
  { path: '**', component: Error404 },
];

*/

/*import { Routes } from '@angular/router';

import { ProduitAjout } from './pages/produit-ajout/produit-ajout';
import { ProduitList } from './pages/produit-list/produit-list';
import { ProduitModifier } from './pages/produit-modifier/produit-modifier';
import { ProduitDetails } from './pages/produit-details/produit-details';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
  // Redirection par défaut vers la liste des produits
  { path: '', redirectTo: 'produits', pathMatch: 'full' },

  // Liste et ajout de produits
  { path: 'produits', component: ProduitList },
  { path: 'produits/ajout', component: ProduitAjout },

  // Détails d’un produit (spécifique, doit être avant le dynamique)
  { path: 'produits/detail/:id', component: ProduitDetails },

  // Modifier un produit (dynamique, après la route détail)
  { path: 'produits/:id', component: ProduitModifier },

  // Page 404 pour toutes les routes non reconnues
  { path: '**', component: Error404 },
];*/

import { Routes } from '@angular/router';

import { ProduitAjout } from './pages/produit-ajout/produit-ajout';
import { ProduitList } from './pages/produit-list/produit-list';
import { ProduitModifier } from './pages/produit-modifier/produit-modifier';
import { ProduitDetails } from './pages/produit-details/produit-details';
import { Error404 } from './pages/error404/error404';

export const routes: Routes = [
  // Redirection par défaut vers la liste des produits
  { path: '', redirectTo: 'produits', pathMatch: 'full' },

  // CRUD produits
  { path: 'produits', component: ProduitList },
  { path: 'produits/ajout', component: ProduitAjout },
  //{ path: 'produits/:id', component: ProduitModifier },
  { path: 'produits/modifier/:id', component: ProduitModifier },
  { path: 'produits/detail/:id', component: ProduitDetails },

  // Page 404 personnalisée
  { path: '404', component: Error404 },

  // Toute autre route redirige vers 404
  { path: '**', redirectTo: '404' },
];