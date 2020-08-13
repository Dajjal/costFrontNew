import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './component/auth/auth.component';
import {PageNotFoundComponent} from './module/shared/component/page-not-found/page-not-found.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'},
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    children: [
      {
        path: 'site',
        loadChildren: () => import('./module/site/site.module').then(m => m.SiteModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  // 404
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
