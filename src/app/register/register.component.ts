import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient , private router: Router){}

  submitForm(form: NgForm) {
    const newUser = {
      username: form.value.username,
      password: form.value.password
    };
  
    this.http.post<any>('http://localhost:8080/api/v1/users', newUser)
      .subscribe(
        response => {
          console.log('user added successfully:', response);
          console.log(newUser);
          form.resetForm();
          this.router.navigate(['/items']); 
        },
        error => {
          console.error('Error adding user:', error);
        }
      );
  }
}
