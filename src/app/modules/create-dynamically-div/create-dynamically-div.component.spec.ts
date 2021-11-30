import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDynamicallyDivComponent } from './create-dynamically-div.component';

describe('CreateDynamicallyDivComponent', () => {
  let component: CreateDynamicallyDivComponent;
  let fixture: ComponentFixture<CreateDynamicallyDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDynamicallyDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDynamicallyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
