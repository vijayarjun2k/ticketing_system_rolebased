import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseticketComponent } from './raiseticket.component';

describe('RaiseticketComponent', () => {
  let component: RaiseticketComponent;
  let fixture: ComponentFixture<RaiseticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
