import { Component, OnInit } from '@angular/core';
import { DataopsService } from '../dataops.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  uid:number;
  uname:string;
  uemail:string;
  ucontact:null;
  upass:string;

  employeeForm: FormGroup;
  constructor(private ser:DataopsService,private fb: FormBuilder, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("emp Id is:"+this.route.snapshot.params['empid']);
    this.uid = this.route.snapshot.params['empid'];
    this.ser.getUser(this.uid).subscribe((res) => {
      res['id'] = (+res['id']);
      res['contact'] = (+res['contact']);
      console.log(res);
      // this.empNow = res;
      this.uid = res['id'];
      this.uname = res['username'];
      this.uemail = res['email'];
      this.ucontact = res['contact'];
      this.upass = res['password'];
    });
    
    this.employeeForm = this.fb.group({
      id: [this.uid, Validators.required],
      username: [this.uname, Validators.required],
      email: [this.uemail, Validators.required],
      contact: [this.ucontact, [Validators.required, Validators.maxLength(10)]],
      password: [this.upass, [Validators.required, Validators.minLength(4)]],
    });
    
    // this.employeeForm.patchValue({username:this.uname,email:this.uemail,contact:this.ucontact,password:this.upass});
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

  onSubmit(){
    this.ser.updateEmp(this.employeeForm.value).subscribe((res)=>{
      console.log("Response on Update:"+res);
    });
      // alert("Your blog has been Updated Successfully");
      this.router.navigate(["list"]);
  }
}