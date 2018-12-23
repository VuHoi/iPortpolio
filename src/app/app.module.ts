import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './components/root/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/containerHome/home.component';
import { ResumeComponent } from './components/resume/resume/resume.component';
import { ContactComponent } from './components/contact/contactContainer/contact.component';
import { InfoComponent } from './components/home/info/info.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerResumeComponent } from './components/resume/container-resume/container-resume.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { DelayResolve } from './resolve-datas/DelayResolve';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CompareValidatorDirective } from './shares/compare-validator.directive';
import { HomeResolve } from './resolve-datas/HomeResolve';
import { PortfolioResolve } from './resolve-datas/PortfolioResolve';
const routes: Routes = [
  { path: '', redirectTo: 'uitgroup/home', pathMatch: 'full' },
  { path: ':name/home', component: HomeComponent, data: { title: 'Home' }, resolve: { home: HomeResolve } },
  { path: ':name/resume', component: ContainerResumeComponent, data: { title: 'Portfolio' }, resolve: { portfolio: PortfolioResolve } },
  { path: ':name/contact', component: ContactComponent, resolve: [DelayResolve] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'uitgroup/home' },
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
    RegisterComponent,
    // custom directive
    CompareValidatorDirective,
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
    DelayResolve,
    HomeResolve,
    PortfolioResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
