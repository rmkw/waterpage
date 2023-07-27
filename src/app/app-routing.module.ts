import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./one-page/one-page.module').then( m => m.OnePageModule)
  },

  { path: '404', component: Error404Component },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
