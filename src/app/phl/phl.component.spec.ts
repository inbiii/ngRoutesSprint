import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhlComponent } from './phl.component';

describe('PhlComponent', () => {
  let component: PhlComponent;
  let fixture: ComponentFixture<PhlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
