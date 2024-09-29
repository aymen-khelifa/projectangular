import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscomponentComponent } from './productscomponent.component';

describe('ProductscomponentComponent', () => {
  let component: ProductscomponentComponent;
  let fixture: ComponentFixture<ProductscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductscomponentComponent]
    });
    fixture = TestBed.createComponent(ProductscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
