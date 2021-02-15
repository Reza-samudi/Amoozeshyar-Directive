import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';


import { ManagersComponent } from './managers.component';
import { PComponent } from './p/p.component';

const routes: Routes = [{ path: '', component: ManagersComponent,children:[
  {path:'p',component:PComponent}
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }
