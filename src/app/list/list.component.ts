import { Component, OnInit } from '@angular/core';
import { DataopsService } from '../dataops.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  emplist:any;
  
  constructor(private ser: DataopsService,private router: Router) { }

  ngOnInit() {
    this.ser.getAllUsers().subscribe((res) => {
      this.emplist = res;
    });
  }
  
  onEdit(empid:number){
    this.router.navigate(['/edit',empid]);
  }

  onDelete(id){
    this.ser.deleteEmp(id).subscribe((res_tem)=>{
      console.log(res_tem);
      console.log(res_tem[status]);
      this.ser.getAllUsers().subscribe((res)=>{
        this.emplist = res;
      });
    });
  }
}
