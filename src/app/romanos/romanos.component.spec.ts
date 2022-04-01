import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanosComponent } from './romanos.component';

describe('RomanosComponent', () => {
  let component: RomanosComponent;
  let fixture: ComponentFixture<RomanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
