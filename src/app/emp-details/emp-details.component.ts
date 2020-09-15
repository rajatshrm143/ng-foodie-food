import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  addEmpForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.addEmpForm = this.fb.group({
      empName: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      address: ['', Validators.required],
      mobileNo: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      empHistory: this.fb.array([this.addMoreEmp()]),
      // eduHistory: this.fb.array([this.addMoreEdu()])
    })
  }

  addMoreEmp(): FormGroup {
    // return FormGroup to the FormArray
    return this.fb.group({
      toDate: [''],
      fromDate: [''],
      salary: ['']
    });
  }

  addMoreEdu() {
    // return FormGroup to the FormArray
    return this.fb.group({
      toDate: [''],
      fromDate: [''],
      completeYear: ['']
    });
  }

  addEmpHistory() {
    const arrCont = this.addEmpForm.controls['empHistory'] as FormArray;
    arrCont.push(this.addMoreEmp());
  }

  deleteEmpHistory(i: number) {
    const arrCont = this.addEmpForm.controls['empHistory'] as FormArray;
    if (arrCont.value.length > 1) {
      arrCont.removeAt(i);

    }
    else {
      alert('One row is mandatory');
      // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      //   width: '250px',
      //   data: { name: 'Rajat', animal: 'Lion' }
      // });
    }
  }

}
