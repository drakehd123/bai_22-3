import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyTemplateComponent } from './my-template/my-template.component';
import { MyFormComponent } from './my-form/my-form.component';

import { ModulsModule } from './moduls/moduls.module';

@NgModule({
  declarations: [
    AppComponent,
    MyTemplateComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    ModulsModule,
  ],
  providers: [],
  entryComponents: [ MyTemplateComponent, MyFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
