import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksListPageRoutingModule } from './tasks-list-routing.module';

import { TasksListPage } from './tasks-list.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    TasksListPageRoutingModule
  ],
  declarations: [TasksListPage]
})
export class TasksListPageModule {}
