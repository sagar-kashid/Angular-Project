import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqGridComponent } from './rfq-grid.component';

describe('RfqGridComponent', () => {
  let component: RfqGridComponent;
  let fixture: ComponentFixture<RfqGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
