import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodologinComponent } from './todologin.component';

describe('TodologinComponent', () => {
  let component: TodologinComponent;
  let fixture: ComponentFixture<TodologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodologinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
