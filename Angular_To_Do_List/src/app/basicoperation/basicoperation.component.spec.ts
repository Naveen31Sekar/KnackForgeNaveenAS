import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicoperationComponent } from './basicoperation.component';

describe('BasicoperationComponent', () => {
  let component: BasicoperationComponent;
  let fixture: ComponentFixture<BasicoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
