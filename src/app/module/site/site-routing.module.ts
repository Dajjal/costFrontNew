import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './component/main/main.component';
import {PageNotFoundComponent} from '../shared/component/page-not-found/page-not-found.component';
import {DictionariesComponent} from './component/dictionaries/dictionaries.component';
import {SiteComponent} from './component/site/site.component';
import {DataAnalysisComponent} from './component/data-analysis/data-analysis.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'dictionaries',
        component: DictionariesComponent
      },
      {
        path: 'data-analysis',
        component: DataAnalysisComponent
      },
    ]
  },
  // 404
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
