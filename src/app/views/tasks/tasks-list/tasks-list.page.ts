import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/components/tasks/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage {

  // $ is an observable

  tasks$: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ionViewDidEnter(): void {
    this.tasks$ = this.tasksService.getAll();
  }

}
