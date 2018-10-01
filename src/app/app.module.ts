import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlertModule} from 'ngx-bootstrap';
import {AppComponent} from './root/app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/containerHome/home.component';
import {ResumeComponent} from './resume/resume/resume.component';
import {ContactComponent} from './contact/contactContainer/contact.component';
import { InfoComponent } from './home/info/info.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerResumeComponent } from './resume/container-resume/container-resume.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'home'}},
  {path: 'resume', component: ContainerResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'home'},
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
