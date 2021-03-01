import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app-views/profile/profile.module').then(m => m.ProfileModule),
    data: {
      animation: 'profile',
    },
  },
  {
    path: 'contact',
    loadChildren: () => import('@app-views/contact/contact.module').then(m => m.ContactModule),
    data: {
      animation: 'contact',
    },
  },
  {
    path: 'works',
    loadChildren: () => import('@app-views/works/works.module').then(m => m.WorksModule),
    data: {
      animation: 'works',
    },
  },
  {
    path: 'works/:projectId',
    loadChildren: () => import('@app-views/project/project.module').then(m => m.ProjectModule),
    data: {
      animation: 'project',
    },
  },
  {
    path: '**',
    loadChildren: () => import('@app-views/error/error.module').then(m => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
