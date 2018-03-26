import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyTemplateComponent } from './my-template/my-template.component';
import { MyFormComponent, LoginsuccesComponent } from './my-form/my-form.component';

import { ModulsModule } from './moduls/moduls.module';
import { FormRegisterComponent } from './form-register/form-register.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTemplateComponent,
    MyFormComponent,
    LoginsuccesComponent,
    FormRegisterComponent
  ],
  imports: [
    BrowserModule,
    ModulsModule,
  ],
  providers: [],
  entryComponents: [ MyTemplateComponent, MyFormComponent, LoginsuccesComponent, FormRegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
