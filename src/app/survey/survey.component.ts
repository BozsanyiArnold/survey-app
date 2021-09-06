import {Component, OnInit} from '@angular/core';
import {SurveyService} from './survey.service';
import {Subscription} from 'rxjs';
import {Survey} from './models/Survey';
import {SurveyOperation} from './models/SurveyOperation';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  private subscriptions: Subscription = new Subscription();

  public surveyList: Survey[];
  public surveyFormOpen = false;
  public surveyViewOpen = false;
  public surveyToEdit: Survey = {
    name: '',
    isOpen: true,
    questions: []
  } as Survey;
  public surveyToView: Survey | null;
  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.surveyService.surveys.subscribe(sl => this.surveyList = sl.sort((s1, s2) => s1.isOpen ===  s2.isOpen ? 0 : s1.isOpen ? -1 : 1) ));
  }

  public openSurveyForm(): void {
    this.surveyFormOpen = true;
  }

  public closeSurveyForm(): void  {
    this.surveyFormOpen = false;
    this.surveyToEdit = {
      name: '',
      isOpen: true,
      questions: []
    } as Survey;
  }

  public openSurveyView(): void {
    this.surveyViewOpen = true;
  }

  public closeSurveyView(): void {
    this.surveyViewOpen  = false;
  }

  public saveSurvey(survey: Survey): void {
    if (!survey.id) {
      this.surveyService.saveSurvey(
        this.surveyService.createSurvey(survey)
      );
    } else {
      this.surveyService.editSurvey(survey);
    }
    this.closeSurveyForm();
    this.surveyToEdit = {
      name: '',
      isOpen: true,
      questions: []
    } as Survey;
  }

  public surveyOperationHandler(operation: string, survey: Survey): void {
    switch (operation) {
      case SurveyOperation.lock:
        this.surveyService.lockSurvey(survey);
        break;
      case SurveyOperation.delete:
        this.surveyService.deleteSurvey(survey);
        break;
      case SurveyOperation.edit:
        this.surveyToEdit  = survey;
        this.openSurveyForm();
        break;
      case SurveyOperation.view:
        this.surveyToView = survey;
        this.surveyViewOpen = true;
        break;
    }
  }

}
