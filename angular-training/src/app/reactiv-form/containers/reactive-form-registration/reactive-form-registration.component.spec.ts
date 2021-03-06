import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormRegistrationComponent } from './reactive-form-registration.component';

describe('ReactiveFormRegistrationComponent', () => {
  let component: ReactiveFormRegistrationComponent;
  let fixture: ComponentFixture<ReactiveFormRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
