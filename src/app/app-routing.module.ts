import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule),
  },
  {
    path: '**',
    redirectTo: 'survey',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
