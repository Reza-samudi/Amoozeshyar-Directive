import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';

import { PComponent } from './p/p.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdddialogComponent } from './adddialog/adddialog.component';





@NgModule({
  declarations: [ManagersComponent, PComponent, AdddialogComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ManagersModule { }
