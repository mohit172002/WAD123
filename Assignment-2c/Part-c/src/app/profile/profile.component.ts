import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  disusername='';
  disemail='';
  dispass='';
  get()
  {
    const data  = JSON.parse(localStorage.getItem("users")||" ");
    const obj =  data[0];
    this.disusername=obj.username;
    this.disemail=obj.email;
    this.dispass=obj.password;
  }
  
}
