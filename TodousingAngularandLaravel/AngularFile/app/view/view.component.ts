import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Data } from '../data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
constructor(public todoService: TodoService, private router: Router
) { }
tasks:Data[]=[];
id!:any;

  
  ngOnInit(): void {
    this.todoService.gettasks().subscribe((data: Data[]) => {
      this.tasks = data.filter(t => t.status === "I");
      console.log(this.tasks);
    });
  }
  change(){
    this.router.navigateByUrl('pending').then(()=>{
      this.router.navigateByUrl('dashboard');
    })
  }

  delete(id: number) {
    this.todoService.deletetask(id).subscribe((res)=>{
      this.tasks = this.tasks.filter(task => task.id != id);
    })}

    markaspending(id: any): void {
      this.todoService.findtask(id).subscribe((task: Data) => {
        task.status = "A"; 
    
        this.todoService.updatetask(id, task).subscribe((response: any) => {
          if (response && response.message === "Successfully Updated") {
            this.tasks = this.tasks.map(existingTask => 
              existingTask.id === id ? response.task : existingTask
            );
            this.change();


          } else {
            console.error('Unexpected response:', response);
          }
        }, error => {
          console.error('Error updating task status:', error);
        });
      }, error => {
        console.error('Error fetching task:', error);
      });
    }
    
}