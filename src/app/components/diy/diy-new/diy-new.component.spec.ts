import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyNewComponent } from './diy-new.component';

describe('DiyNewComponent', () => {
  let component: DiyNewComponent;
  let fixture: ComponentFixture<DiyNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiyNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
