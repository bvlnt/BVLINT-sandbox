import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypinterestgalleryComponent } from './mypinterestgallery.component';

describe('MypinterestgalleryComponent', () => {
  let component: MypinterestgalleryComponent;
  let fixture: ComponentFixture<MypinterestgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypinterestgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypinterestgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
