import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoregisterComponent } from './todoregister.component';

describe('TodoregisterComponent', () => {
  let component: TodoregisterComponent;
  let fixture: ComponentFixture<TodoregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
