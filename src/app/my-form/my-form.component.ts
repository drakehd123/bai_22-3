import { Component, OnInit, Inject } from '@angular/core';
// phan them
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
// end phan
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  rfForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<MyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    ) { }
    onNoClick(): void {
    this.dialogRef.close();
    }

  ngOnInit() {
    this.rfForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass:  ['', [Validators.required, Validators.minLength(6)]],
      rpass: '',
    });

  }
  onSubmit() {
    console.log(this.rfForm);
    this.rfForm.reset();
  }

}
