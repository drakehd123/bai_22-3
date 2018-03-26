import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

const allmodul = [
  MatDialogModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatButtonModule,
  ReactiveFormsModule,
  Ng2PageScrollModule
];
@NgModule({
  imports: [
    CommonModule,
    ...allmodul,
  ],
  exports: [
    ...allmodul,
  ],
  declarations: []
})
export class ModulsModule { }
