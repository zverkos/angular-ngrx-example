import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTooComponent } from './counter-too.component';

describe('CounterTooComponent', () => {
  let component: CounterTooComponent;
  let fixture: ComponentFixture<CounterTooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
