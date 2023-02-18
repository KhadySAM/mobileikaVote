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
    path: 'projets/:idEvents',
    loadChildren: () => import('./projets/projets.module').then( m => m.ProjetsPageModule)
  },
  {
    path: 'evaluation/:id/:idProjet',
    loadChildren: () => import('./evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'detailevents/:id',
    loadChildren: () => import('./detailevents/detailevents.module').then( m => m.DetaileventsPageModule)
  },
  {
    path: 'resultats/:idEvents',
    loadChildren: () => import('./resultats/resultats.module').then( m => m.ResultatsPageModule)
  },
  {
    path: 'loginjury',
    loadChildren: () => import('./loginjury/loginjury.module').then( m => m.LoginjuryPageModule)
  },
  {
    path: 'event-votant/:codeVotant',
    loadChildren: () => import('./event-votant/event-votant.module').then( m => m.EventVotantPageModule)
  },
  {
    path: 'detail-events-votant/:idEvents',
    loadChildren: () => import('./detail-events-votant/detail-events-votant.module').then( m => m.DetailEventsVotantPageModule)
  },
  {
    path: 'projet-votant/:idEvents',
    loadChildren: () => import('./projet-votant/projet-votant.module').then( m => m.ProjetVotantPageModule)
  },
  {
    path: 'resultat-votant/:idEvents',
    loadChildren: () => import('./resultat-votant/resultat-votant.module').then( m => m.ResultatVotantPageModule)
  },
  {
    path: 'evaluation-votant/:id/:idProjet',
    loadChildren: () => import('./evaluation-votant/evaluation-votant.module').then( m => m.EvaluationVotantPageModule)
  },
  // {
  //   path: 'projets-votants',
  //   loadChildren: () => import('./projets-votants/projets-votants.module').then( m => m.ProjetsVotantsPageModule)
  // },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
