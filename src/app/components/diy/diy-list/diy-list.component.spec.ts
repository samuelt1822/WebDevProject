import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyListComponent } from './diy-list.component';

describe('DiyListComponent', () => {
  let component: DiyListComponent;
  let fixture: ComponentFixture<DiyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
