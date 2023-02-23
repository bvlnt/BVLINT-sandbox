import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancymenuComponent } from './fancymenu.component';

describe('FancymenuComponent', () => {
  let component: FancymenuComponent;
  let fixture: ComponentFixture<FancymenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancymenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
