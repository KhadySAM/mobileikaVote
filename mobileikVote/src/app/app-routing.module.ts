import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  

  {
    path: 'connexionvotant',
    loadChildren: () => import('./connexionvotant/connexionvotant.module').then( m => m.ConnexionvotantPageModule)
  },
  {
    path: 'evenements',
    loadChildren: () => import('./evenements/evenements.module').then( m => m.EvenementsPageModule)
  },
  {
    path: 'projets/:id',
    loadChildren: () => import('./projets/projets.module').then( m => m.ProjetsPageModule)
  },
  {
    path: 'evaluation/:id',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'detailevents/:id',
    loadChildren: () => import('./detailevents/detailevents.module').then( m => m.DetaileventsPageModule)
  },
  {
    path: 'resultats',
    loadChildren: () => import('./resultats/resultats.module').then( m => m.ResultatsPageModule)
  },
  {
    path: 'loginjury',
    loadChildren: () => import('./loginjury/loginjury.module').then( m => m.LoginjuryPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
