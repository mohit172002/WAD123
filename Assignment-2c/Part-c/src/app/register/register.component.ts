import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Part-c';
  user_name="";
  email_id="";
  password="";

  constructor(private router:Router){}


  getValue(user:string,email:string,pwd:string)
  {
     this.user_name=user;
     this.email_id=email;
     this.password=pwd;

    const user_records = new Array();
    const info = {
      "username":this.user_name,
      "email":this.email_id,
      "password":this.password
    };

    user_records.push(info);

    localStorage.setItem("users",JSON.stringify(user_records));
     
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
