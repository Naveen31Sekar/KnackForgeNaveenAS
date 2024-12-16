import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(public todoService: TodoService, private router: Router) { }
  tasks:Data[]=[];
  form!:FormData;

  ngOnInit(): void {
    this.todoService.gettasks().subscribe((data: Data[]) => {
      this.tasks = data.filter(t => t.status === "A");
      console.log(this.tasks);
    });
  }
  
  change(){
    this.router.navigateByUrl('completed').then(()=>{
      this.router.navigateByUrl('dashboard');
    })
  }
  movetocomplete(id: any) {
    this.todoService.findtask(id).subscribe((data: Data) => {
      data['status'] = "I";  
      this.todoService.updatetask(id, data).subscribe((updatedData: Data) => {
          this.tasks = this.tasks.map(task => 
            task.id === id ? updatedData : task
          );
          this.change();
      });
    });
  }
  

  delete(id: any) {
    this.todoService.deletetask(id).subscribe((data: Data)=>{
      this.tasks = this.tasks.filter(task => task.id != id);
    })

  }
}

