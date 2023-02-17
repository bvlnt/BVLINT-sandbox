import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackereffectComponent } from './hackereffect.component';

describe('HackereffectComponent', () => {
  let component: HackereffectComponent;
  let fixture: ComponentFixture<HackereffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackereffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackereffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
