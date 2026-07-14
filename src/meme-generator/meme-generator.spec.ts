import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeGenerator } from './meme-generator';

describe('MemeGenerator', () => {
  let component: MemeGenerator;
  let fixture: ComponentFixture<MemeGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
