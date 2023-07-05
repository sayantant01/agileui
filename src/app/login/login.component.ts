import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clientId: string = '';
  PhoneNumber: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.http.get<any[]>(`http://localhost:8080/api/clients?id=${this.clientId}&phone=${this.PhoneNumber}`).subscribe(data => {
      console.log(data);
      if (data && data.length > 0) {
        // Client ID and phone number exist in the table
        this.router.navigate(['/']);
      } else {
        // Client ID and phone number do not exist in the table
        this.errorMessage = 'Invalid client credentials';
      }
    }, error => {
      // Error occurred while retrieving data from the API
      console.log(error);
      this.errorMessage = 'Error occurred while logging in';
    });
  }
}