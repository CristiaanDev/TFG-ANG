import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSemanalComponent } from './menu-semanal.component';

describe('MenuSemanalComponent', () => {
  let component: MenuSemanalComponent;
  let fixture: ComponentFixture<MenuSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSemanalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
