import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { InternsGuard } from './interns.guard';

const routes: Routes = [
  { path: '', component: UsersComponent , children:[
  { canLoad:[InternsGuard], path: 'interns', loadChildren: () => import('./interns/interns.module').then(m => m.InternsModule)},
  
]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
