import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Data } from '../data';
import { ChangeDetectorRef } from '@angular/core';  // Import ChangeDetectorRef


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
constructor(public todoService: TodoService, 
  private cdr: ChangeDetectorRef
) { }
tasks:Data[]=[];
id!:any;

  
  ngOnInit(): void {
    this.todoService.gettasks().subscribe((data: Data[]) => {
      this.tasks = data.filter(t => t.status === "I");
      console.log(this.tasks);
    });
  }

  delete(id: number) {
    this.todoService.deletetask(id).subscribe((res)=>{
      this.tasks = this.tasks.filter(task => task.id != id);

    })}

    markaspending(id: any): void {
      this.todoService.findtask(id).subscribe((task: Data) => {
        task.status = "A";  // Mark the task as 'A' (Active/Pending)
    
        // Update the task on the server
        this.todoService.updatetask(id, task).subscribe((response: any) => {
          // Check if the response contains a message
          if (response && response.message === "Successfully Updated") {
            // Once updated, immediately update the local tasks array
            this.tasks = this.tasks.map(existingTask => 
              existingTask.id === id ? response.task : existingTask
            );
            this.tasks = [...this.tasks.map(existingTask => 
              existingTask.id === id ? response.task : existingTask
            )];

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