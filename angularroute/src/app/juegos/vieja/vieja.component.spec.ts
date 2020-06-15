import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViejaComponent } from './vieja.component';

describe('ViejaComponent', () => {
  let component: ViejaComponent;
  let fixture: ComponentFixture<ViejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
