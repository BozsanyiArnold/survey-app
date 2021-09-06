import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Question
} from '../../models/Question';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {

  @Input() question: Question;
  @Input() index: number;
  @Output() deleteQuestionEmitter: EventEmitter<number> = new EventEmitter<number>();

  public addOption(): void {
    this.question.options = [...this.question.options, ''];
  }

  public deleteQuestion(): void {
    this.deleteQuestionEmitter.emit(this.index);
  }

  public trackOptions(index): number {
    return index;
  }

  public get order(): string {
    return `${this.index + 1}`;
  }
}
