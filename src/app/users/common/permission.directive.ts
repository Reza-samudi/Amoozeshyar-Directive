import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[permission]'
})
export class PermissionDirective implements OnInit {
  @Input('permission') permission: string[];

  constructor(private el: ElementRef)  { 

  }
  ngOnInit(): void {
    var permit = false;
    this.permission.forEach(element =>{
      if(element == sessionStorage.getItem('role')){
        permit = true;
      }
    });
    console.log(permit);
    if(permit == false) {
      this.el.nativeElement.style.display = 'none';
    }
    
  }

}
