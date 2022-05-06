import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewClientsComponent } from './page-new-clients.component';

describe('PageNewClientsComponent', () => {
  let component: PageNewClientsComponent;
  let fixture: ComponentFixture<PageNewClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
