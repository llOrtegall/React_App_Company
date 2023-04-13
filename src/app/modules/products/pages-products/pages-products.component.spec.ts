import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesProductsComponent } from './pages-products.component';

describe('PagesProductsComponent', () => {
  let component: PagesProductsComponent;
  let fixture: ComponentFixture<PagesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
