import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChainComponent } from './blockchain.component';

describe('BlockChainComponent', () => {
  let component: BlockChainComponent;
  let fixture: ComponentFixture<BlockChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
