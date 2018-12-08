import {BrowserModule, Title} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AlertModule} from 'ngx-bootstrap';
import {AppComponent} from './components/root/app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './components/home/containerHome/home.component';
import {ResumeComponent} from './components/resume/resume/resume.component';
import {ContactComponent} from './components/contact/contactContainer/contact.component';
import { InfoComponent } from './components/home/info/info.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerResumeComponent } from './components/resume/container-resume/container-resume.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import {DelayResolve} from './DelayResolve';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'uitgroup/home', pathMatch: 'full'},
  {path: ':name/home', component: HomeComponent, data: {title: 'home'}},
  {path: ':name/resume', component: ContainerResumeComponent, resolve : [DelayResolve]},
  {path: ':name/contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'uitgroup/home'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    InfoComponent,
    InfoCardComponent,
    FooterComponent,
    ContainerResumeComponent,
    ProjectCardComponent,
    ContactFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Title,
    DelayResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
