import { Component, ViewChild } from '@angular/core';
import { QuestionViewModel } from 'src/app/shared/view-models/question-view-model.vm';
import { QuestionFilterComponent } from '../../components/question-filter/question-filter.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(QuestionFilterComponent) filter: QuestionFilterComponent;

  data: QuestionViewModel;
  maxQuestions: number;
  filters: { difficulty: string, categories: string[] };

  constructor(private homeService: HomeService){
    this.filters = { difficulty: '', categories: [] };
    this.getOneQuestion();
  }

  getOneQuestion(): void {
    this.homeService.getOneQuestion(this.filters.categories, this.filters.difficulty).subscribe({
      next: this.handleOneQuestionSuccess.bind(this)
    });
  }

  handleOneQuestionSuccess(obj: QuestionViewModel[]): void {
    obj.forEach(q => {
      q.answers = q.incorrectAnswers.concat(q.correctAnswer);
      this.data = q;
    });
  }

  openFilter(): void {
    this.filter.opened = true;
  }

  receiveFilterData(data: any): void {
    this.filters = data;
    console.log(this.filters)
  }
}