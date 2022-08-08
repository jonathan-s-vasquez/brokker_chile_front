import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditScoreSimulatorComponent } from './credit-score-simulator.component';

describe('CreditScoreSimulatorComponent', () => {
  let component: CreditScoreSimulatorComponent;
  let fixture: ComponentFixture<CreditScoreSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditScoreSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditScoreSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
