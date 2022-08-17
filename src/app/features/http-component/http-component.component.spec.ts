import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponentComponent } from './http-component.component';

describe('HttpComponentComponent', () => {
  let component: HttpComponentComponent;
  let fixture: ComponentFixture<HttpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
