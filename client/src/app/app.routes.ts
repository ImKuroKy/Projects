import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';
import { guestGuard } from './features/auth/guards/guest.guard';
import { AboutPageComponent } from './features/about-page/components/about-page/about-page.component';
import { LoginPageComponent } from './features/auth/components/login-page/login-page.component';
import { RegisterPageComponent } from './features/auth/components/register-page/register-page.component';
import { ProfilePageComponent } from './features/profile/components/profile-page/profile-page.component';
import { ProfileEditPageComponent } from './features/profile/components/profile-edit-page/profile-edit-page.component';
import { WarehousePageComponent } from './features/warehouse/components/warehouse-page/warehouse-page.component';
import { WarehouseHomePageComponent } from './features/warehouse/components/warehouse-home-page/warehouse-home-page.component';

export const routes: Routes = [
  {
    title: 'О нас',
    path: 'about',
    component: AboutPageComponent,
  },
  {
    title: 'Вход',
    path: 'auth/login',
    canActivate: [guestGuard],
    component: LoginPageComponent,
  },
  {
    title: 'Регистрация',
    path: 'auth/register',
    canActivate: [guestGuard],
    component: RegisterPageComponent,
  },
  {
    title: 'Личный кабинет',
    path: 'profile',
    canActivate: [authGuard],
    component: ProfilePageComponent,
  },
  {
    title: 'Личный кабинет',
    path: 'profile/edit',
    canActivate: [authGuard],
    component: ProfileEditPageComponent,
  },
  {
    title: 'Склад',
    path: 'warehouse/:id/products',
    canActivate: [authGuard],
    component: WarehousePageComponent,
  },
  {
    title: 'Склады',
    path: 'warehouse',
    canActivate: [authGuard],
    component: WarehouseHomePageComponent,
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' }, // Redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
