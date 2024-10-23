import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './featuries/home-page/home-page.component';
import { LoginPageComponent } from './featuries/login-page/login-page.component';
import { RegisterPageComponent } from './featuries/register-page/register-page.component';
import { ProfilePageComponent } from './featuries/profile-page/profile-page.component';

export const routes: Routes = [
  {
    title: 'Главная',
    path: 'about',
    component: HomePageComponent,
  },
  {
    title: 'Вход',
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    title: 'Регистрация',
    path: 'auth/register',
    component: RegisterPageComponent,
  },
  {
    title: 'Личный кабинет',
    path: 'profile',
    component: ProfilePageComponent,
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' }, // Redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
