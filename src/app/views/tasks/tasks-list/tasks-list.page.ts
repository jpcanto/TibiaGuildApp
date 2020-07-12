import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/components/tasks/models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage implements OnInit {

  // $ is an observable

  tasks$: Observable<Task[]>;

  constructor() { }

  ngOnInit(): void {
    // of returns a new observable
    this.tasks$ = of([
      {id: 'teste', title: 'GT', done: false},
      {id: 'teste2', title: 'Inquisition', done: false}
    ]);
  }

}
