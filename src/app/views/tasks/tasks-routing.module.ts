import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    // using canActivateChild, authGuard is applied to all childrens, and we have'nt to set canLoad on each child.
    // Oba: canActivateChild does not block the download of the page even without authentication, that is, lazy loading is not used. 
    //If we want to optimize using the lazy load, we would have to add canLoad to each child route.
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: () => import('./create-task/create-task.module').then( m => m.CreateTaskPageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./create-task/create-task.module').then( m => m.CreateTaskPageModule)
      },
      {
        path: 'assign/:id',
        loadChildren: () => import('./task-assign/task-assign.module').then( m => m.TaskAssignPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./tasks-list/tasks-list.module').then(m => m.TasksListPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
