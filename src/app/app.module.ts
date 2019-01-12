import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ToastModule } from './components/toast/toast.module';
import { AuthInterceptor } from './shares/AuthInterceptor';
import { MobileNavigationModule } from './shares/mobile-navigation/mobile-navigation.module';
const routes: Routes = [
  { path: '', redirectTo: 'uitgroup/home', pathMatch: 'full' },
  { path: ':name/home', component: HomeComponent, data: { title: 'Home' }, resolve: { home: HomeResolve } },
  { path: ':name/resume', component: ContainerResumeComponent, data: { title: 'Portfolio' }, resolve: { portfolio: PortfolioResolve } },
  { path: ':name/contact', component: ContactComponent, data: { title: 'Contact' }, resolve: [DelayResolve] },
  { path: 'login', component: LoginComponent, data: { title: 'Login' }, resolve: [DelayResolve] },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' }, resolve: [DelayResolve] },
  { path: 'notfound', component: NotfoundComponent, data: { title: 'Not Found', resolve: [DelayResolve] } },
  { path: ':name', redirectTo: ':name/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'notfound' }
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
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    ToastModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MobileNavigationModule
  ],
  providers: [
    Title,
    DelayResolve,
    HomeResolve,
    PortfolioResolve
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
