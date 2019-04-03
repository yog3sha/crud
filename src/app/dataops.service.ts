import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class DataopsService {
  
  id:number;

  employees: Profile[];

  constructor(private http: HttpClient) { }

  registerEmp(data){
    return this.http.post("http://localhost:8080/newemp/register.php", data).pipe(
      map((res:Response)=>{
      return res;
    }));
  }

  getAllUsers(){
    return this.http.get("http://localhost:8080/newemp/getAll.php").pipe(
      map((res:Response)=>{
        return res;
      }));      
  }

  getUser(id){
    return this.http.post("http://localhost:8080/newemp/getUser.php", id).pipe(
      map((res:Response)=>{
        return res;
      }));      
  }
  getid(){
    return this.id;
  }

  updateEmp(data) {
    return this.http.post('http://localhost:8080/newemp/updateEmp.php', data).pipe(
      map((res: Response) => {
        return res;
      }));
  }

  deleteEmp(id){
    return this.http.post("http://localhost:8080/newemp/deleteEmp.php", id).pipe(
      map((res:Response)=>{
        console.log(res);
        return res.json();
      }));      
  }
  setId(id){
    this.id = id;
  }
}
