import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatepopupComponent } from './adminupdatepopup.component';

describe('AdminupdatepopupComponent', () => {
  let component: AdminupdatepopupComponent;
  let fixture: ComponentFixture<AdminupdatepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdatepopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminupdatepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
