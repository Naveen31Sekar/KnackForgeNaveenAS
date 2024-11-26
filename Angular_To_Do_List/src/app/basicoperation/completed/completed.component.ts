import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  one = document.getElementById("ctask");
  two = this.one?.innerHTML
  constructor() { }

  ngOnInit(): void {
   
  }

}
