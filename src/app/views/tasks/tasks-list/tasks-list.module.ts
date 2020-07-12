import { NgModule } from '@angular/core';

import { TasksListPage } from './tasks-list.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TasksListPage
  }
]
@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TasksListPage]
})
export class TasksListPageModule { }
