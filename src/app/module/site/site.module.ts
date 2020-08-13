import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './component/main/main.component';
import {SiteRoutingModule} from './site-routing.module';
import {DictionariesComponent} from './component/dictionaries/dictionaries.component';
import {SiteComponent} from './component/site/site.component';
import {SiteHeaderComponent} from './component/site/site-header/site-header.component';
import {CardComponent} from './component/main/card/card.component';
import {DataAnalysisComponent} from './component/data-analysis/data-analysis.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    SiteComponent,
    SiteHeaderComponent,
    // main
    MainComponent,
    CardComponent,
    // dictionaries
    DictionariesComponent,
    // data analysis
    DataAnalysisComponent
  ],
  imports: [
    CommonModule,
    // routing
    SiteRoutingModule,
    // shared module
    SharedModule,
  ]
})
export class SiteModule {
}
