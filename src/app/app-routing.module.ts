import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LayoutDefaultComponent } from './shared/containers/layout-default/layout-default.component';
import { LayoutDefaultModule } from './shared/containers/layout-default/layout-default.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutDefaultModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }