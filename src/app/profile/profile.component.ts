import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataopsService } from '../dataops.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  employeeForm: FormGroup;
 
  constructor(private fb: FormBuilder,private ser:DataopsService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      id: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, [Validators.required, Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  get id() {
    return this.employeeForm.get('id');
  }
  get username() {
    return this.employeeForm.get('username');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get contact() {
    return this.employeeForm.get('contact');
  }

  get password() {
    return this.employeeForm.get('password');
  }

  onSubmit() {
    if(this.employeeForm.value.id == null) {
      this.ser.registerEmp(this.employeeForm.value).subscribe(
        res => {
          console.log(res);
          this.employeeForm.reset();
        }
      );
    }
    else {
      this.ser.updateEmp(this.employeeForm.value).subscribe(
        res => {
          this.employeeForm.reset();
        }
      );
    }
  }

}
