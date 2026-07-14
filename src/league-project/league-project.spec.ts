import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueProject } from './league-project';

describe('LeagueProject', () => {
  let component: LeagueProject;
  let fixture: ComponentFixture<LeagueProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
