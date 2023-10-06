import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddQuizComponent } from './addquiz/addquiz.component';
import { ViewquizComponent } from './viewquiz/viewquiz.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'addquiz', component: AddQuizComponent },
  { path: 'viewquiz', component: ViewquizComponent },
  { path: 'addquestions', component: AddQuestionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewquestions/:qid', component: ViewquestionsComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
