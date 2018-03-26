import { Component, OnInit, Inject } from '@angular/core';


import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';

export function foFindnamea(name = []) {
  return (c: AbstractControl) => {
    return (name.includes(c.value)) ? { invalidname: true } : null;
  };
}
export function comparepassword(v: AbstractControl) {
  const a = v.value;
  return (a.pass === a.pass2) ? null : {
    passwordnotmath: true
  };
}

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  rfFormRg: FormGroup;
  constructor(
    public dialogGis: MatDialogRef<FormRegisterComponent>,
    public dialog2: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rf: FormBuilder,
  ) { }
  onNoClick(): void {
    this.dialogGis.close();
  }

  ngOnInit() {
    this.rfFormRg = this.rf.group({
      name: ['', [Validators.required, foFindnamea(['admin', 'manager'])]],
      email: ['', [Validators.required, Validators.email]],
      pw: this.rf.group({
        pass: ['', [Validators.required, Validators.minLength(6)]],
        pass2: ['', [Validators.required ]],
        },
        {
          validator : comparepassword
        })

    });
  }
  onSubmit() {
    console.log(this.rfFormRg);
    this.rfFormRg.reset();
  }
}
