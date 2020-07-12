import { Injectable } from '@angular/core';
import { Firestore } from '../core/classes/firestore.class';
import { Task } from '../components/tasks/models/task.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends Firestore<Task> {

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        // this.setCollection(`/users/${user.uid}/tasks`) do this for Create/Use a list for each user
        this.setCollection('tasks');
      }
      // this is not necessary, because the tasks are available for all users, so that path not change
      // apply this code if create a list for each user, to clean reference path when user logout.
      // this.setCollection(null);
    })
  }
}
