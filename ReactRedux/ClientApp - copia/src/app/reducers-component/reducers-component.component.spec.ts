import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducersComponentComponent } from './reducers-component.component';

describe('ReducersComponentComponent', () => {
  let component: ReducersComponentComponent;
  let fixture: ComponentFixture<ReducersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReducersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
