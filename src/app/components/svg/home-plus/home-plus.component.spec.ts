import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlusComponent } from './home-plus.component';

describe('HomePlusComponent', () => {
  let component: HomePlusComponent;
  let fixture: ComponentFixture<HomePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
