import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  [x: string]: any;
  id!: number;
  task!: Data;
  form!: FormGroup;
  constructor(public editTask : TodoService, 
    private router: Router,
    private route : ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.id  =this.route.snapshot.params['taskID'];
    this.editTask.findtask(this.id).subscribe((task:Data)=>{
      this.task = task;
    })

    this.form = new FormGroup({
      task : new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })

  }
  submit() {
    console.log("edit clicked");
    this['todoService'].editTask(this.form.value).subscribe((data: Data) => {
      this.router.navigateByUrl("index");
      console.log("added Successfully", data);
    });
  }

}
