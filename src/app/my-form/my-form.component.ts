import { Component, OnInit, Inject } from '@angular/core';
// phan them
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

// end phan

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  rfForm: FormGroup;
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<MyFormComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.rfForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      rpass: '',
    });

  }
  onSubmit() {
    console.log(this.rfForm);
    this.rfForm.reset();
  }

  onNoClickForm(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginsuccesComponent, {
      width: '350px',
      // height: '550px',
      // disableClose: false,
    });
  }

}
@Component({
  selector: 'app-my-loginsucces',
  template: '<p>Login success</p>',
  styles: ['p{text-align:center;color:green;font-site:25px}'],
})
export class LoginsuccesComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginsuccesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
