import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurencyConverterComponent } from './curency-converter.component';

describe('CurencyConverterComponent', () => {
  let component: CurencyConverterComponent;
  let fixture: ComponentFixture<CurencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurencyConverterComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(''), () => {
    expect(component.firstCurrency).toBe(true)
  }

});
