import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyMultipleComponent } from './money-multiple.component';

describe('MoneyMultipleComponent', () => {
  let component: MoneyMultipleComponent;
  let fixture: ComponentFixture<MoneyMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
