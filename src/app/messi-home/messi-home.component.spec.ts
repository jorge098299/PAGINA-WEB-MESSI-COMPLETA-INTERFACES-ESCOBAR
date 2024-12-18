import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessiHomeComponent } from './messi-home.component';

describe('MessiHomeComponent', () => {
  let component: MessiHomeComponent;
  let fixture: ComponentFixture<MessiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessiHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
