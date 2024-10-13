import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './featuries/home-page/home-page.component';
import { LoginPageComponent } from './featuries/login-page/login-page.component';
import { RegisterPageComponent } from './featuries/register-page/register-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    title: 'Главная',
    path: '',
    component: HomePageComponent,
  },
  {
    title: 'Вход',
    path: 'login',
    component: LoginPageComponent,
  },
  {
    title: 'Регистрация',
    path: 'register',
    component: RegisterPageComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, // Redirect unknown routes to login
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }