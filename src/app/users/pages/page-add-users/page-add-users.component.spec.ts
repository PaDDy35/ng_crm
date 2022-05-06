import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddUsersComponent } from './page-add-users.component';

describe('PageAddUsersComponent', () => {
  let component: PageAddUsersComponent;
  let fixture: ComponentFixture<PageAddUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
