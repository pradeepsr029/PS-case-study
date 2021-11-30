import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowImgComponent } from './shadow-img.component';

describe('ShadowImgComponent', () => {
  let component: ShadowImgComponent;
  let fixture: ComponentFixture<ShadowImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
