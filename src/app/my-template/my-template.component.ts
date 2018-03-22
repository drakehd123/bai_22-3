import { Component, OnInit, HostListener } from '@angular/core';


// phan them
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyFormComponent } from '../my-form/my-form.component';
// end phan them


@Component({
  selector: 'app-my-template',
  templateUrl: './my-template.component.html',
  styleUrls: ['./my-template.component.scss']
})
export class MyTemplateComponent implements OnInit {
  active;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
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
      height: '500px',
      data: { name: this.name, animal: this.animal },
      // disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  // end open

}
