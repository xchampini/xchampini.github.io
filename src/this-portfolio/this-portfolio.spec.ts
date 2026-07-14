import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisPortfolio } from './this-portfolio';

describe('ThisPortfolio', () => {
  let component: ThisPortfolio;
  let fixture: ComponentFixture<ThisPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisPortfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
