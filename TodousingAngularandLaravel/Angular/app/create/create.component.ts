import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import {  Router, } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {
  constructor(public todoService: TodoService, private router: Router){}
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      task: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    
  }

  submit() {
    const content =this.form.value;
    console.log("added Successfully", content);
     this.todoService.addtask(content).subscribe((res:any) => {
      this.router.navigateByUrl(this.router.url);
    });
  }
  
  }

