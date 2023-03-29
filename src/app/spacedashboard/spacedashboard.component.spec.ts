import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacedashboardComponent } from './spacedashboard.component';

describe('SpacedashboardComponent', () => {
  let component: SpacedashboardComponent;
  let fixture: ComponentFixture<SpacedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
