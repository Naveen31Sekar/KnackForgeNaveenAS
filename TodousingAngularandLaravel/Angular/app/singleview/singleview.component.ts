import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Data } from '../data';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {

  constructor(public todoService:TodoService, private route:ActivatedRoute, private router:Router) { }
  id!:number;
  task!: Data;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['taskID'];
    this.todoService.findtask(this.id).subscribe((data:Data)=>{
      data = this.task;
      console.log(data);
    })
  }
    
  


}
