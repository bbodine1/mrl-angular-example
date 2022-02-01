import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierDashboardComponent } from './soldier-dashboard.component';

describe('SoldierDashboardComponent', () => {
  let component: SoldierDashboardComponent;
  let fixture: ComponentFixture<SoldierDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldierDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldierDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
