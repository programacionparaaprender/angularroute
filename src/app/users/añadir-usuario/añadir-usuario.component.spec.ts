import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AñadirUsuarioComponent } from './añadir-usuario.component';

describe('AñadirUsuarioComponent', () => {
  let component: AñadirUsuarioComponent;
  let fixture: ComponentFixture<AñadirUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AñadirUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AñadirUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
