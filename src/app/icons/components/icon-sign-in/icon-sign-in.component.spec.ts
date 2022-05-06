import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSignInComponent } from './icon-sign-in.component';

describe('IconSignInComponent', () => {
  let component: IconSignInComponent;
  let fixture: ComponentFixture<IconSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
