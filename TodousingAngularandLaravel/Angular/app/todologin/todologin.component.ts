import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todologin',
  templateUrl: './todologin.component.html',
  styleUrls: ['./todologin.component.css']
})
export class TodologinComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    // Initializing the form group with validators
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email must be valid and required
      password: ['', [Validators.required, Validators.minLength(8)]] // Password must be at least 8 characters long
    });
  }

  form!: FormGroup;

  ngOnInit(): void {
    // We initialize the form again here for better consistency in lifecycle hooks
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  submit() {
    if (this.form.invalid) {
      console.log('Form is invalid');
      return;  // Do not proceed if the form is invalid
    }

    const logindetail = this.form.value;
    this.loginService.finduser(logindetail).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('dashboard');  // Redirect to create page after successful login
      console.log('Login Successful', res.token);
    }, error => {
      console.error('Login failed:', error); // Handle login errors
    });

    console.log(logindetail);  // For debugging
  }

  // Getter methods to access form controls easily in the template
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
