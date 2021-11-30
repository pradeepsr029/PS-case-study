import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAndRowViewOptionComponent } from './grid-and-row-view-option.component';

describe('GridAndRowViewOptionComponent', () => {
  let component: GridAndRowViewOptionComponent;
  let fixture: ComponentFixture<GridAndRowViewOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAndRowViewOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAndRowViewOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
