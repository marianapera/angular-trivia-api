import { Component, Input } from '@angular/core';
import { QuestionViewModel } from 'src/app/shared/view-models/question-view-model.vm';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() question: QuestionViewModel;
  disabled: boolean;
  points: number;

  constructor(){
    this.points = 0;
    this.disabled = false;
    this.question = {} as QuestionViewModel;
  }

  // getRandomArr(min:number, max:number): number{
  //   return Math.round(Math.random() * (max - min) + min);
  // }

  sendAnswer(answer: string): boolean {
   if(answer === this.question.correctAnswer){
    console.log(this.question.correctAnswer)
    this.points += 1;
    console.log(this.points)
    return true;
   }
   return false;
  }
}