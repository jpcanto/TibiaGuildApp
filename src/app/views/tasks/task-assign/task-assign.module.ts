import { NgModule } from '@angular/core';

import { TaskAssignPageRoutingModule } from './task-assign-routing.module';

import { TaskAssignPage } from './task-assign.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TaskAssignPageRoutingModule
  ],
  declarations: [TaskAssignPage]
})
export class TaskAssignPageModule {}
