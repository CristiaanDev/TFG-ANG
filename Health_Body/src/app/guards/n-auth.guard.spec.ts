import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nAuthGuard } from './n-auth.guard';

describe('nAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
