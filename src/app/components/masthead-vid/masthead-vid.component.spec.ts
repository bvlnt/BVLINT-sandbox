import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastheadVidComponent } from './masthead-vid.component';

describe('MastheadVidComponent', () => {
  let component: MastheadVidComponent;
  let fixture: ComponentFixture<MastheadVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastheadVidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastheadVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
