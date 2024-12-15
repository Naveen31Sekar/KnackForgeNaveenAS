import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todoregister',
  templateUrl: './todoregister.component.html',
  styleUrls: ['./todoregister.component.css']
})
export class TodoregisterComponent implements OnInit {

  constructor(public loginservice: LoginService, private router: Router) { }

  // Declare the form group
  form!: FormGroup;

  ngOnInit(): void {
    // Initialize the form with validations
    this.form = new FormGroup({
      name: new FormControl('', Validators.required), // Name field is required
      email: new FormControl('', [Validators.required, Validators.email]), // Email must be valid and required
      password: new FormControl('', [Validators.required, Validators.minLength(8)]) // Password must be at least 8 characters
    });
  }

  // Method to handle form submission
  submit() {
    if (this.form.invalid) {
      // If form is invalid, do not submit
      console.log('Form is invalid');
      return;
    }

    const userdata = this.form.value;
    console.log(userdata);

    // Call the service to register the user
    this.loginservice.adduser(userdata).subscribe((res: any) => {
      console.log("User Added Successfully");
      this.router.navigateByUrl("login");
    }, (err) => {
      console.error('Error adding user:', err);
    });
  }

  // Getter methods for accessing form controls easily in the template
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
