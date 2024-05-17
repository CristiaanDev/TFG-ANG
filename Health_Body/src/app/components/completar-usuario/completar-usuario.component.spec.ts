import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarUsuarioComponent } from './completar-usuario.component';

describe('CompletarUsuarioComponent', () => {
  let component: CompletarUsuarioComponent;
  let fixture: ComponentFixture<CompletarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletarUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
