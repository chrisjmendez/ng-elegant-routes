import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AuthLayoutComponent } from '../shared/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', redirectTo: '/pages/login', pathMatch: 'full' },
  { path: '', component: AuthLayoutComponent, 
      children: [ 
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' } 
      ] 
    },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
