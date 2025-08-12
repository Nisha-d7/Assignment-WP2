import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ApiDataComponent } from './api-data/api-data';
import { ContactFormComponent } from './contact-form/contact-form';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', redirectTo: '/home' }
];
