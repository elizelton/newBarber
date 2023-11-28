import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinputComponent } from './twinput.component';

describe('TwinputComponent', () => {
  let component: TwinputComponent;
  let fixture: ComponentFixture<TwinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
