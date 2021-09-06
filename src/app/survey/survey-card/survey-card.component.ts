import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Survey } from '../models/Survey';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent {

  @Input() survey: Survey;

  @Output() surveyOperationEvent: EventEmitter<string> = new EventEmitter<string>();

  public surveyOperation(operation: string): void {
    this.surveyOperationEvent.emit(operation);
  }

}
