import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocercaGoogleComponent } from './geocerca-google.component';

describe('GeocercaGoogleComponent', () => {
  let component: GeocercaGoogleComponent;
  let fixture: ComponentFixture<GeocercaGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocercaGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocercaGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
