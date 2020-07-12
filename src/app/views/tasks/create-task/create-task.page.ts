import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      done: [false]
    })
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Creating task...'
    });
    try {
      const task = await this.tasksService.create(this.taskForm.value);
      this.navCtrl.navigateBack('/tasks');
    } catch (error) {
      await this.overlayService.toast({
        message: error.message
      })
    } finally {
      loading.dismiss();
    }
  }

}
