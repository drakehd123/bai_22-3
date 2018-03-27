import { Component, OnInit, HostListener } from '@angular/core';


// phan them
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyFormComponent } from '../my-form/my-form.component';
import { FormRegisterComponent } from '../form-register/form-register.component';
// end phan them
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-my-template',
  templateUrl: './my-template.component.html',
  styleUrls: ['./my-template.component.scss']
})
export class MyTemplateComponent implements OnInit {
  dialogRef: any;
  active;
  rfFormContact: FormGroup;
  color1 = true;
  // animal: string;
  name: string;
  constructor(
    public dialog: MatDialog,
    private ct: FormBuilder,
  ) { }

  ngOnInit() {
    this.rfFormContact = this.ct.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      title: ['', [Validators.required, Validators.minLength(10)]],
      comment: ['', [Validators.required, Validators.minLength(35)]],
    });
  }
  onSubmit() {
    console.log(this.rfFormContact);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 100) {
      this.active = false;
    } else if (number > 200) {
      this.active = true;
    }

  }
  // end nav croll
  openDialog(): void {
    const dialogRef = this.dialog.open(MyFormComponent, {
      width: '550px',
      // height: '550px',
      // data: { name: this.name, animal: this.animal },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
    // this.dialogRef.close();
  }
  // end open
  openForRg(): void {
    const dialogRef = this.dialog.open(FormRegisterComponent, {
      width: '550px',
      height: '55px;',
    });
  }

}
