import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsrendererComponent } from './threejsrenderer.component';

describe('ThreejsrendererComponent', () => {
  let component: ThreejsrendererComponent;
  let fixture: ComponentFixture<ThreejsrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
