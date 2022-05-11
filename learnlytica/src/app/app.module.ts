import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from './material/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseComponent } from './components/course/course.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { Route, Routes } from '@angular/router';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TitlePipe } from './pipes/title.pipe';
import { BracketPipe } from './pipes/bracket.pipe';
import { TxtbackgroundDirective } from './directives/txtbackground.directive';
import { TemplateformComponent } from './components/templateform/templateform.component';


const myRoutes: Routes = [

  { path: 'course', component: ListCourseComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServiceComponent,
    ContactComponent,
    NotfoundComponent,
    HomeComponent,
    AddressComponent,
    LoginComponent,
    ListProfileComponent,
    ProfileDetailsComponent,
    ReactiveComponent,
    TitlePipe,
    BracketPipe,
    TxtbackgroundDirective,
    TemplateformComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule
  
  

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
