import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePropertyComponent } from './real-estate-property.component';

describe('RealEstatePropertyComponent', () => {
  let component: RealEstatePropertyComponent;
  let fixture: ComponentFixture<RealEstatePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstatePropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
