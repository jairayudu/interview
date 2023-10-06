import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { AddQuizComponent } from './addquiz/addquiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatSnackBar,
  MatSnackBarModule,
  matSnackBarAnimations,
} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { ViewquizComponent } from './viewquiz/viewquiz.component';
import { UpdatequizComponent } from './updatequiz/updatequiz.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StartComponent } from './start/start.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    WelcomeComponent,
    ChangeBgDirective,
    AddQuizComponent,
    ViewquizComponent,
    UpdatequizComponent,
    AddQuestionsComponent,
    ViewquestionsComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    StartComponent,
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,

    HttpClientModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
