import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import {SurveyRoutingModule} from './survey-routing.module';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { QuestionFormComponent } from './survey-form/question-form/question-form.component';
import { SurveyViewComponent } from './survey-view/survey-view.component';

@NgModule({
  declarations: [SurveyComponent, SurveyFormComponent, SurveyCardComponent, QuestionFormComponent, SurveyViewComponent],
  imports: [CommonModule, FormsModule, SurveyRoutingModule],
  providers: [],
  exports: [],
})
export class SurveyModule {}
