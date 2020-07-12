import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskItemComponent } from './tasks/task-item/task-item.component';



@NgModule({
  declarations: [TaskItemComponent],
  imports: [ SharedModule ],
  exports: [TaskItemComponent]
})
export class ComponentsModule { }
