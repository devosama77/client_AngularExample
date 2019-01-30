import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCoursesComponent } from './dash-courses.component';

describe('DashCoursesComponent', () => {
  let component: DashCoursesComponent;
  let fixture: ComponentFixture<DashCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
