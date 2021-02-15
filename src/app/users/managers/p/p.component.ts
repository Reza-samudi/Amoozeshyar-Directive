import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { AdddialogComponent } from '../adddialog/adddialog.component';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.scss']
})
export class PComponent implements OnInit {
  
  current:any;
  action:string='';
  data:any[];

  constructor(public dialog: MatDialog) { }
 

  ngOnInit(): void {
  }
  openDialog(action):void {
    this.dialog.open(AdddialogComponent);
    this.action=action;
    switch (action) {
      case 'create':
        this.current={}
        break;

      default:
        break;
    }
  }
}



 
