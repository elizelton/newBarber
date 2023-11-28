import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwNavBarComponent } from './tw-nav-bar.component';

describe('TwNavBarComponent', () => {
  let component: TwNavBarComponent;
  let fixture: ComponentFixture<TwNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
