import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionViewModel } from 'src/app/shared/view-models/question-view-model.vm';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getOneQuestion(categories: string[], difficult: string): Observable<QuestionViewModel[]>{
    difficult = difficult ? difficult : 'hard';

    return this.http.get<QuestionViewModel[]>(`${env.apiUrl}questions?limit=1&categories=${categories}&difficulty=${difficult}`);
  }

  getQuestions(max: number,categories: string[]): Observable<QuestionViewModel[]> {
    return this.http.get<QuestionViewModel[]>(
      `${env.apiUrl}questions?limit=${max}&categories=${categories}`
    );
  }
}