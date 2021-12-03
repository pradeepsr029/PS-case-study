import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideEntryRendererComponent } from './guide-entry-renderer.component';

describe('GuideEntryRendererComponent', () => {
  let component: GuideEntryRendererComponent;
  let fixture: ComponentFixture<GuideEntryRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideEntryRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideEntryRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
