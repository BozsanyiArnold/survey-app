import { Question } from './Question';

export class Survey {
  id?: number;
  isOpen = true;
  name: string;
  questions: Question[];
}
