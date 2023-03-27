import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QUESTION_FILTER_MOCK } from '../../mocks/question-filter.mock';

@Component({
  selector: 'app-question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.scss']
})
export class QuestionFilterComponent {
  @Output() filters: EventEmitter<Event>;
  @Input() opened: boolean;

  difficultyList: string[];
  categList: string[];
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.initializeData();
  }

  initializeData(): void {
    this.opened = false;
    this.form = this.createForm();
    this.filters = new EventEmitter();

    this.difficultyList = QUESTION_FILTER_MOCK.difficulty;
    this.categList = QUESTION_FILTER_MOCK.categories;
  }

  createForm(): FormGroup {
    return this.fb.group({
      categories: [[]],
      difficulty: ['']
    });
  }

  get categories(): Array<string> {
    return this.form.controls['categories'].value as Array<string>;
  }

  submitFilter(): void {
    this.filters.emit(this.form.value);
  }

  closeFilter(): void {
    this.opened = false;
  }
}