import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyEditComponent } from './diy-edit.component';

describe('DiyEditComponent', () => {
  let component: DiyEditComponent;
  let fixture: ComponentFixture<DiyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
