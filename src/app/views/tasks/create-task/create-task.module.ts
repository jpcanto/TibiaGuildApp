import { NgModule } from '@angular/core';

import { CreateTaskPageRoutingModule } from './create-task-routing.module';

import { CreateTaskPage } from './create-task.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CreateTaskPageRoutingModule
  ],
  declarations: [CreateTaskPage]
})
export class CreateTaskPageModule {}
