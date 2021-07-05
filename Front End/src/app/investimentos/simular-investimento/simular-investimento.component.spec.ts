import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularInvestimentoComponent } from './simular-investimento.component';

describe('SimularInvestimentoComponent', () => {
  let component: SimularInvestimentoComponent;
  let fixture: ComponentFixture<SimularInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimularInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
