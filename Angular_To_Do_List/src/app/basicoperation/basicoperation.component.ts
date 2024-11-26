import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicoperation',
  templateUrl: './basicoperation.component.html',
  styleUrls: ['./basicoperation.component.css']
})
export class BasicoperationComponent implements OnInit {
  title = 'Todo List'; 
  taskInput: string = '';  
  showFiller:Boolean = false;
  pendingTasks: { text: string, isEditing: boolean }[] = []; 
  completedTasks: { text: string, isEditing: boolean }[] = []; 

  addTask() {
    if (this.taskInput.trim() !== '') {
      this.pendingTasks.push({ text: this.taskInput, isEditing: false});
      this.taskInput = ''; 
    }
  }

  change() {
    var division = document.getElementById('hidediv');
    if (division) {
        division.style.display = ''; 

    }
}
  
  markCompleted(index: number) {
    const task = this.pendingTasks.splice(index, 1)[0];
    this.completedTasks.push(task);
  }

  markPending(index: number) {
    const task = this.completedTasks.splice(index, 1)[0];
    this.pendingTasks.push(task);
  }

  removeTask(index: number, isCompleted: boolean) {
    if (isCompleted) {
      this.completedTasks.splice(index, 1);
    } else {
      this.pendingTasks.splice(index, 1);
    }
  }

  editTask(index: number, isCompleted: boolean) {
    const taskList = isCompleted ? this.completedTasks : this.pendingTasks;
    const newTaskText = prompt('Edit task:', taskList[index].text);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskList[index].text = newTaskText.trim();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

  



