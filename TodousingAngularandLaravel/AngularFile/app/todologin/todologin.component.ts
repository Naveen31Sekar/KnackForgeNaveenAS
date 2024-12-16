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
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(8)]] 
    });
  }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  submit() {
    if (this.form.invalid) {
      console.log('Form is invalid');
      return;  
    }

    const logindetail = this.form.value;
    this.loginService.finduser(logindetail).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('dashboard'); 
      console.log('Login Successful', res.token);
    }, error => {
      console.error('Login failed:', error); 
    });

    console.log(logindetail);  
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
