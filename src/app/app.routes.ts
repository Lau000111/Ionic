import { Routes } from '@angular/router';
import { canDeactivateSupportPage } from './providers/can-deactivate-support.guard';
import { checkTutorialGuard } from './providers/check-tutorial.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./pages/account/account').then(m => m.AccountPage),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./pages/support/support').then(m => m.SupportPage),
    canDeactivate: [canDeactivateSupportPage],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup').then(m => m.SignupPage),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/tabs-page/routes').then(m => m.TABS_ROUTES),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomePage),
    canMatch: [checkTutorialGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomePage),
    canMatch: [checkTutorialGuard],
  },
];
