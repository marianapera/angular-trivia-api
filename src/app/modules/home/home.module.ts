import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';
import { ChangeAnswerStyleDirective } from '../../shared/directives/change-answer-style.directive';

// components
import { QuestionFilterComponent } from './components/question-filter/question-filter.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [QuestionCardComponent, HomeComponent, QuestionFilterComponent, ChangeAnswerStyleDirective],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, MatButtonModule, MatSidenavModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  providers: [HomeService]
})
export class HomeModule {}