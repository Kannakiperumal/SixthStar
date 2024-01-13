import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthwebpageComponent } from './sixthwebpage.component';

describe('SixthwebpageComponent', () => {
  let component: SixthwebpageComponent;
  let fixture: ComponentFixture<SixthwebpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthwebpageComponent]
    });
    fixture = TestBed.createComponent(SixthwebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
