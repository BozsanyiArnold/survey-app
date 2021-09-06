import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Survey } from './models/Survey';
import { Question } from './models/Question';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private $surveys: BehaviorSubject<Survey[]> = new BehaviorSubject<Survey[]>([]);
  private lastUsedId = 0;

  constructor() {
    const surveyList = JSON.parse(localStorage.getItem('surveys'))?.sort((s1, s2) => s1.id - s2.id);
    if (surveyList) {
      this.lastUsedId = surveyList.length ? surveyList[surveyList.length - 1].id  : 0;
      this.$surveys.next(surveyList);
    }
  }

  get surveys(): Observable<Survey[]> {
    return this.$surveys.asObservable();
  }

  public createSurvey({name, questions}: {name: string, questions: Question[]}): Survey {
    return {
      id: ++this.lastUsedId,
      isOpen: true,
      questions,
      name
    };
  }

  private persist(surveyList: Survey[]): void {
    localStorage.setItem('surveys', JSON.stringify(surveyList));
    this.$surveys.next(surveyList);
  }

  public saveSurvey(survey: Survey): void {
    const surveyList = [...this.$surveys.getValue(), survey];
    this.persist(surveyList);
  }

  public lockSurvey(survey: Survey): void {
    const surveyList = [...this.$surveys.getValue()];
    const newSurveyList = [...surveyList.filter(s => s.id !== survey.id), {...surveyList.find(s => s.id === survey.id), isOpen: false}];
    this.persist(newSurveyList);
  }

  public deleteSurvey(survey: Survey): void {
    const surveyList = [...this.$surveys.getValue().filter(s => s.id !== survey.id)];
    this.persist(surveyList);
  }

  public editSurvey(survey: Survey): void {
    const surveyList = [...this.$surveys.getValue()];
    const newSurveyList = [...surveyList.filter(s => s.id !== survey.id), {...surveyList.find(s => s.id === survey.id)}];
    this.persist(newSurveyList);
  }
}
