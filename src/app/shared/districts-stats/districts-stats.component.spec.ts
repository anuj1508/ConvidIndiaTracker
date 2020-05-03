import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsStatsComponent } from './districts-stats.component';

describe('DistrictsStatsComponent', () => {
  let component: DistrictsStatsComponent;
  let fixture: ComponentFixture<DistrictsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
