import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltriggerComponent } from './scrolltrigger.component';

describe('ScrolltriggerComponent', () => {
  let component: ScrolltriggerComponent;
  let fixture: ComponentFixture<ScrolltriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrolltriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
