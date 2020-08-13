import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// components
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
// basic forms modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// http
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// kendo ui modules
import {LayoutModule} from '@progress/kendo-angular-layout';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {LabelModule} from '@progress/kendo-angular-label';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {BodyModule, ExcelModule, GridModule, PagerModule, PDFModule} from '@progress/kendo-angular-grid';
import {DialogsModule} from '@progress/kendo-angular-dialog';
import {TooltipModule} from '@progress/kendo-angular-tooltip';
import {PopupModule} from '@progress/kendo-angular-popup';
import {SiteNavigationService} from '../../service/site-navigation.service';
import {UploadModule, UploadsModule} from '@progress/kendo-angular-upload';
import {TofiInterceptor} from '../../interceptor/tofi.interceptor';
import {SharedModule as ShModule} from '@progress/kendo-angular-upload';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    // own
    CommonModule,
    // basic form module
    FormsModule,
    ReactiveFormsModule,
    // http
    HttpClientModule,
    // kendo ui
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DialogsModule,
    BodyModule,
    PagerModule,
    TooltipModule,
    PopupModule,
    UploadModule,
    UploadsModule,
    ShModule,
  ],
  exports: [
    // basic form module
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    // kendo ui
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    DialogsModule,
    BodyModule,
    PagerModule,
    TooltipModule,
    PopupModule,
    UploadModule,
    UploadsModule,
    ShModule,
    // components
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TofiInterceptor,
      multi: true
    },
    SiteNavigationService
  ]
})
export class SharedModule {
}
