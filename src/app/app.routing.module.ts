import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@app-views/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'contact', loadChildren: () => import('@app-views/contact/contact.module').then(m => m.ContactModule) },
  { path: 'works', loadChildren: () => import('@app-views/works/works.module').then(m => m.WorksModule) },
  {
    path: 'works/:projectId',
    loadChildren: () => import('@app-views/project/project.module').then(m => m.ProjectModule),
  },
  { path: '**', loadChildren: () => import('@app-views/error/error.module').then(m => m.ErrorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
