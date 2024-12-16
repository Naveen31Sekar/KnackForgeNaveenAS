import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import {  Router, } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {
  constructor(public todoService: TodoService, private router: Router, private fb: FormBuilder){}
  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      task: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    
  }
  change(){
    this.router.navigateByUrl('pending').then(() => {
      this.router.navigateByUrl('dashboard');
    })
    
  }
  submit() {
    const content =this.form.value;
    console.log("added Successfully", content);
     this.todoService.addtask(content).subscribe((res:any) => {
      this.change();
    });
  }
  }

