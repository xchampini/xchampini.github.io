import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalEsportsGroup } from './local-esports-group';

describe('LocalEsportsGroup', () => {
  let component: LocalEsportsGroup;
  let fixture: ComponentFixture<LocalEsportsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalEsportsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalEsportsGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
