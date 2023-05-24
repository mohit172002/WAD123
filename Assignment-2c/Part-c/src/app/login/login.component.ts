import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username='';
  password='';
  searchValue:string = '';
  pwdval:string = '';
constructor(private router:Router){}

getData(user:string,pwd:string)
{
   this.username = user;
   this.password = pwd;
   const data  = JSON.parse(localStorage.getItem("users")||" ");
   const obj =  data[0];
   if(obj.username==this.username &&  obj.password==this.password)
   {
      alert("Login Successfully")
      this.router.navigate(['/profile']);
   }
   else
   {
    alert("Login Not Successfully")
   }
}
clearSearch() {
  this.searchValue = ' ';
  this.pwdval=' ';
}
  
}
