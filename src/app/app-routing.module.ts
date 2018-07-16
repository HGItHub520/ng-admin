import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { AuthGuard } from './common/guard/auth.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'layout',
    component: GlobalLayoutComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
