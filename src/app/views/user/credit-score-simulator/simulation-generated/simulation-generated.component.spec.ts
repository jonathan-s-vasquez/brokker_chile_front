import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationGeneratedComponent } from './simulation-generated.component';

describe('SimulationGeneratedComponent', () => {
  let component: SimulationGeneratedComponent;
  let fixture: ComponentFixture<SimulationGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationGeneratedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
