import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Survey } from '../models/Survey';
import { Question } from '../models/Question';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {

  @Output() emitSurvey: EventEmitter<Survey> = new EventEmitter<Survey>();
  @Output() closeSurveyFormEmitter: EventEmitter<null> = new EventEmitter<null>();

  @Input() survey: Survey = {
    name: '',
    isOpen: true,
    questions: []
  } as Survey;

  public addQuestion(): void {
    this.survey.questions = [...this.survey.questions, {
      text: '',
      options: ['']
    } as Question];
  }

  public saveSurvey(): void {
    this.emitSurvey.emit(this.survey);
  }

  public closeSurveyForm(): void {
    this.closeSurveyFormEmitter.emit();
  }

  public deleteQuestion(index: number): void {
    this.survey.questions = this.survey.questions.filter((q, i) => i !== index);
  }
}
