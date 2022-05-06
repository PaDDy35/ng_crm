import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewOrdersComponent } from './page-new-orders.component';

describe('PageNewOrdersComponent', () => {
  let component: PageNewOrdersComponent;
  let fixture: ComponentFixture<PageNewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
