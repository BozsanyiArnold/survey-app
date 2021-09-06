import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Survey } from '../models/Survey';

@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.scss']
})
export class SurveyViewComponent {

  @Input() survey: Survey;
  @Output() closeSurveyViewEmitter: EventEmitter<null> = new EventEmitter();

  public closeSurveyView(): void {
    this.closeSurveyViewEmitter.emit();
  }
}
