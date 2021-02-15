import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InternsComponent } from './interns.component';

describe('InternsComponent', () => {
  let component: InternsComponent;
  let fixture: ComponentFixture<InternsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
