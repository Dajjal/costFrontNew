// angular modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// components
import {AppComponent} from './component/root/app.component';
import {AuthComponent} from './component/auth/auth.component';
// modules
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './module/shared/shared.module';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './service/auth.service';











@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // shared module
    SharedModule,
    // translation module
    /*TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useClass: TranslateLanguageLoader
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        // useClass: MissingTranslationService
      },
      useDefaultLang: true,
    }),*/
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
