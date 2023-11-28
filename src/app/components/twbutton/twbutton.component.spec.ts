import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwbuttonComponent } from './twbutton.component';

describe('TwbuttonComponent', () => {
  let component: TwbuttonComponent;
  let fixture: ComponentFixture<TwbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
