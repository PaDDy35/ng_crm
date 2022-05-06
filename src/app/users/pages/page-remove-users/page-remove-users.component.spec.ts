import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRemoveUsersComponent } from './page-remove-users.component';

describe('PageRemoveUsersComponent', () => {
  let component: PageRemoveUsersComponent;
  let fixture: ComponentFixture<PageRemoveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRemoveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRemoveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
