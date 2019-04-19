import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorRoomsComponent } from './outdoor-rooms.component';

describe('OutdoorRoomsComponent', () => {
  let component: OutdoorRoomsComponent;
  let fixture: ComponentFixture<OutdoorRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
