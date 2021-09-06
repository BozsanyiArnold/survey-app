import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey.component';

const surveyPath: Routes = [{
  path: '',
  component: SurveyComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(surveyPath)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {}
