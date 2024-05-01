import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdministrationComponent } from './components/administration/administration.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'home#nosotros', component: HomeComponent },
  { path: 'home#servicios', component: HomeComponent },
  { path: 'home#reseñas', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'visualizer', component: VisualizerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'administration', component: AdministrationComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
