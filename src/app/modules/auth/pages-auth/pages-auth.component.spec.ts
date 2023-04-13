import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAuthComponent } from './pages-auth.component';

describe('PagesAuthComponent', () => {
  let component: PagesAuthComponent;
  let fixture: ComponentFixture<PagesAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
