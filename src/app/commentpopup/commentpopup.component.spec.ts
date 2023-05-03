import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentpopupComponent } from './commentpopup.component';

describe('CommentpopupComponent', () => {
  let component: CommentpopupComponent;
  let fixture: ComponentFixture<CommentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
