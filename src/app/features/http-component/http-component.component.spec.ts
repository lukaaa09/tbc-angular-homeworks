import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponentComponent } from './http-component.component';

describe('HttpComponentComponent', () => {
  let component: HttpComponentComponent;
  let fixture: ComponentFixture<HttpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpComponentComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HttpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#str should be equal to string test', _ => {
    component.tittle()
    expect(component.str).toEqual('luka')
  })
  it('ngOnInit  should call get method', _ => {
    const spy = spyOn(component, 'getAll')
    component.showMoreButton()
    expect(spy).toHaveBeenCalled()
  })
});
