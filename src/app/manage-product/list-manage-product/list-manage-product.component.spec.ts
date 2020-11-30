import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManageProductComponent } from './list-manage-product.component';

describe('ListManageProductComponent', () => {
  let component: ListManageProductComponent;
  let fixture: ComponentFixture<ListManageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManageProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
