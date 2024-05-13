import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorAlimentosComponent } from './buscador-alimentos.component';

describe('BuscadorAlimentosComponent', () => {
  let component: BuscadorAlimentosComponent;
  let fixture: ComponentFixture<BuscadorAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorAlimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscadorAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
