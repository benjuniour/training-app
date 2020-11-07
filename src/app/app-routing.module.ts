import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  
  {path: '', component:SignupComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'students', component: StudentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
