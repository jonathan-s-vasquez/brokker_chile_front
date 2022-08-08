import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicBackgroundComponent } from './economic-background.component';

describe('EconomicBackgroundComponent', () => {
  let component: EconomicBackgroundComponent;
  let fixture: ComponentFixture<EconomicBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
