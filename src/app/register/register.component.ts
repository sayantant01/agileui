import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.role = '';
  }

  onSubmit() {
    // TODO: Implement registration logic
  }
}