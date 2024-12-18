import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogrosMessiComponent } from './logros-messi.component';

describe('LogrosMessiComponent', () => {
  let component: LogrosMessiComponent;
  let fixture: ComponentFixture<LogrosMessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogrosMessiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogrosMessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
