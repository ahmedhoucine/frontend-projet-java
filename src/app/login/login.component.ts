import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient , private router: Router){}

  submitForm(form: NgForm) {
    const User = {
      username: form.value.username,
      password: form.value.password
    };
  
    this.http.post<any>('http://localhost:8080/api/v1/users/login', User)
      .subscribe(
        response => {
          console.log('user logged in successfully:', response);
          console.log(User);
          form.resetForm();
          this.router.navigate(['/items']); 
        },
        error => {
          console.error('Error adding user:', error);
        }
      );
  }
}
