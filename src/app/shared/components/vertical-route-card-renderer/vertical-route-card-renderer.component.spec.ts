import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalRouteCardRendererComponent } from './vertical-route-card-renderer.component';

describe('VerticalRouteCardRendererComponent', () => {
  let component: VerticalRouteCardRendererComponent;
  let fixture: ComponentFixture<VerticalRouteCardRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalRouteCardRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalRouteCardRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
