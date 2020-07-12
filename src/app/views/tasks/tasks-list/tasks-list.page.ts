import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/components/tasks/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
})
export class TasksListPage {

  // $ is an observable

  tasks$: Observable<Task[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private tasksService: TasksService
  ) { }

  ionViewDidEnter(): void {
    this.tasks$ = this.tasksService.getAll();
  }

  onUpdate(task: Task): void {
    this.navCtrl.navigateForward(`/tasks/edit/${task.id}`)
  }

  async onDelete(task: Task): Promise<void> {
    await this.overlayService.alert({
      message: `Do you really want to delete the task "${task.title}"?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.tasksService.delete(task);
            await this.overlayService.toast({
              message: `Task "${task.title}" deleted succesfully!`
            })
          }
        },
        'No'
      ]
    });
  }

  async onDone(task: Task): Promise<void> {
    const taskToUpdate = { ...task, done: !task.done };
    await this.tasksService.update(taskToUpdate);
    await this.overlayService.toast({
      message: `Task "${task.title}" ${taskToUpdate.done ? 'in progress...' : 'Stopped'}`;
    })
  }

}
