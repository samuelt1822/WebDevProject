import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiySComponent } from './diy-s.component';

describe('DiySComponent', () => {
  let component: DiySComponent;
  let fixture: ComponentFixture<DiySComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiySComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
