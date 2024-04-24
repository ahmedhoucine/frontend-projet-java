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
    const user = {
      username: form.value.username,
      password: form.value.password
    };
  
    this.http.get<any>(`http://localhost:8080/api/v1/login?username=${user.username}&password=${user.password}`).subscribe(
      (response) => {
        if (response) {
          console.log('Login successful', response);

          localStorage.setItem('currentUser', JSON.stringify(response));

          this.router.navigate(['/items']);
        } else {
          console.log('Login failed');
      
        }
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
